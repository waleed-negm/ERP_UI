import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { StatementContainer } from '../../models/GL/IStatement-container.interface';
import { StatementParams } from '../../models/GL/IStatementParams.interface';
import { TrailBalanceContainer } from '../../models/GL/ITrailBalanceContainer.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class ReportRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.Report;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    accountStatment(): Observable<GenericResponseDto<StatementContainer>> {
        return this.http.get<GenericResponseDto<StatementContainer>>(`${this.apiUrl}/AccountStatment`);
    }

    buildStatment(vm: StatementParams): Observable<GenericResponseDto<StatementContainer>> {
        return this.http.post<GenericResponseDto<StatementContainer>>(`${this.apiUrl}/AccountStatment`, vm, { headers: this.getHeaders() });
    }

    trailBalance(): Observable<GenericResponseDto<TrailBalanceContainer>> {
        return this.http.get<GenericResponseDto<TrailBalanceContainer>>(`${this.apiUrl}/Trail`);
    }

    buildTrail(vm: TrailBalanceContainer): Observable<GenericResponseDto<StatementContainer>> {
        return this.http.post<GenericResponseDto<StatementContainer>>(`${this.apiUrl}/Trail`, vm, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
