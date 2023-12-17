import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { API } from '../api.constants';
import { SelectListItem } from '../../dtos/ISelect-list-item.interface';
import { GenericResponseDto } from '../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class ListRepository {
    private http = inject(HttpClient);
    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.List;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    getSafeAccounts(id: number): Observable<GenericResponseDto<SelectListItem[]>> {
        return this.http.get<GenericResponseDto<SelectListItem[]>>(`${this.apiUrl}/Safe?id=${id}`);
    }

    getBankAccounts(id: number): Observable<GenericResponseDto<SelectListItem[]>> {
        return this.http.get<GenericResponseDto<SelectListItem[]>>(`${this.apiUrl}/Bank?id=${id}`);
    }
}
