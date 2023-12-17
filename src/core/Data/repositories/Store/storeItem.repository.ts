import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { StoreItem } from '../../models/Store/IStore-item.interface';
import { StoreItemCreation } from '../../models/Store/IStoreItemCreation.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class StoreItemsRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.StoreItems;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    getAll(): Observable<GenericResponseDto<StoreItem[]>> {
        return this.http.get<GenericResponseDto<StoreItem[]>>(`${this.apiUrl}`);
    }

    create(vm: StoreItemCreation): Observable<GenericResponseDto<StoreItem>> {
        return this.http.post<GenericResponseDto<StoreItem>>(`${this.apiUrl}`, vm, { headers: this.getHeaders() });
    }

    getItemBalance(id: number): Observable<GenericResponseDto<number>> {
        return this.http.get<GenericResponseDto<number>>(`${this.apiUrl}/Balance/${id}`);
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
