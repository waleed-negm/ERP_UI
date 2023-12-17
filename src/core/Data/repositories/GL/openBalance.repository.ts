import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { OpeningTransaction } from '../../models/GL/IOpeningTransaction.interface';
import { Journal } from '../../models/GL/IJournal.interface';
import { GenericResponseDto, ResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class OpenBalanceRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.OpenBalance;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    newBalance(): Observable<GenericResponseDto<OpeningTransaction>> {
        return this.http.get<GenericResponseDto<OpeningTransaction>>(`${this.apiUrl}`);
    }

    saveOpeningBalance(vm: OpeningTransaction): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}`, vm, { headers: this.getHeaders() });
    }

    createJournal(): Observable<GenericResponseDto<Journal>> {
        return this.http.get<GenericResponseDto<Journal>>(`${this.apiUrl}/Journal`);
    }

    saveJournal(vm: Journal): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}/Journal`, vm, { headers: this.getHeaders() });
    }

    getAccountDetails(id: string): Observable<ResponseDto> {
        return this.http.get<ResponseDto>(`${this.apiUrl}/Account/${id}`);
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
