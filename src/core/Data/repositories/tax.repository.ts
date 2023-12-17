import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { API } from '../api.constants';
import { Tax } from '../models/ITax.interface';
import { GenericResponseDto } from '../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class TaxRepository {
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.Tax;

    constructor(private http: HttpClient) {}

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    calculateTax(vm: Tax): Observable<GenericResponseDto<Tax>> {
        return this.http.post<GenericResponseDto<Tax>>(`${this.apiUrl}`, vm, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
