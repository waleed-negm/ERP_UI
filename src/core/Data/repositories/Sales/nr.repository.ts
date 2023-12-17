import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { CheckInSafeContainer } from '../../models/Sales/ICheckInSafeContainer.interface';
import { CheckInBankContainer } from '../../models/Sales/ICheckInBankContainer.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class NRRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.NR;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    checkInSafe(): Observable<GenericResponseDto<CheckInSafeContainer>> {
        return this.http.get<GenericResponseDto<CheckInSafeContainer>>(`${this.apiUrl}/CheckInSafe`);
    }

    checkInBank(): Observable<GenericResponseDto<CheckInBankContainer>> {
        return this.http.get<GenericResponseDto<CheckInBankContainer>>(`${this.apiUrl}/CheckInBank`);
    }

    moveToBank(vm: CheckInSafeContainer): Observable<GenericResponseDto<CheckInSafeContainer>> {
        return this.http.post<GenericResponseDto<CheckInSafeContainer>>(`${this.apiUrl}/MoveToBank`, vm, { headers: this.getHeaders() });
    }

    collectChecks(vm: CheckInBankContainer): Observable<GenericResponseDto<CheckInBankContainer>> {
        return this.http.post<GenericResponseDto<CheckInBankContainer>>(`${this.apiUrl}/CollectChecks`, vm, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
