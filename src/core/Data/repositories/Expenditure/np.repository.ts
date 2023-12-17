import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { NPContainer } from '../../models/Expenditure/INPContainer.interface';
import { NPDetails } from '../../models/Expenditure/INPDetails.interface';
import { GenericResponseDto, ResponseDto } from './../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class NPRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.NP;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    manageNP(): Observable<GenericResponseDto<NPContainer>> {
        return this.http.get<GenericResponseDto<NPContainer>>(`${this.apiUrl}`);
    }

    collectCheck(np: NPDetails): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}/CollectCheck`, np, { headers: this.getHeaders() });
    }

    moveToCashCollection(np: NPDetails): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}/MoveToCashCollection`, np, { headers: this.getHeaders() });
    }

    collectCashCollection(vm: NPContainer): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}/CollectCashCollection`, vm, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
