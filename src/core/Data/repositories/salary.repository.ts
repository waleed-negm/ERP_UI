import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { API } from '../api.constants';
import { SalaryBatch } from '../models/ISalaryBatch.interface';
import { BatchContainer } from '../models/IBatchContainer.interface';
import { GenericResponseDto, ResponseDto } from '../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class SalaryRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.Salary;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    getAll(): Observable<GenericResponseDto<SalaryBatch[]>> {
        return this.http.get<GenericResponseDto<SalaryBatch[]>>(`${this.apiUrl}`);
    }

    manageBatch(id: number): Observable<GenericResponseDto<BatchContainer>> {
        return this.http.get<GenericResponseDto<BatchContainer>>(`${this.apiUrl}/${id}`);
    }

    saveBatch(vm: BatchContainer): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}`, vm, { headers: this.getHeaders() });
    }

    calcTax(vm: BatchContainer): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this.apiUrl}/CalcTax`, vm, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
