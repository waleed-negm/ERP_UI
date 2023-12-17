import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { Contact } from '../../models/Sales/IContact.interface';
import { ContactCreating } from '../../models/Expenditure/IContactCreating.interface';
import { SalesContainer } from '../../models/Sales/ISalesContainer.interface';
import { ClientPaymentContainer } from '../../models/Sales/IClientPaymentContainer.interface';
import { ClientStatmentContainer } from '../../models/Sales/IClientStatmentContainer.interface';
import { StatementParams } from '../../models/GL/IStatementParams.interface';
import { GenericResponseDto, ResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientsRepository {
    private http = inject(HttpClient);
    private _baseUrl: string = environment.apiUrl;
    public controllerName: string = API.Clients;
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    getAll(): Observable<GenericResponseDto<Contact[]>> {
        return this.http.get<GenericResponseDto<Contact[]>>(`${this._baseUrl}/${this.controllerName}`);
    }

    create(client: ContactCreating): Observable<GenericResponseDto<Contact>> {
        return this.http.post<GenericResponseDto<Contact>>(`${this._baseUrl}/${this.controllerName}`, client, { headers: this.headers });
    }

    newSale(id: number): Observable<GenericResponseDto<SalesContainer>> {
        return this.http.get<GenericResponseDto<SalesContainer>>(`${this._baseUrl}/${this.controllerName}/NewSale?id=${id}`);
    }

    saveNewSale(vm: SalesContainer): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this._baseUrl}/${this.controllerName}/NewSale`, vm, { headers: this.headers });
    }

    clientPayment(id: number): Observable<GenericResponseDto<ClientPaymentContainer>> {
        return this.http.get<GenericResponseDto<ClientPaymentContainer>>(`${this._baseUrl}/${this.controllerName}/Payment?id=${id}`);
    }

    saveClientPayment(vm: ClientPaymentContainer): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this._baseUrl}/${this.controllerName}/Payment`, vm, { headers: this.headers });
    }

    getClientStatement(): Observable<GenericResponseDto<ClientStatmentContainer>> {
        return this.http.get<GenericResponseDto<ClientStatmentContainer>>(`${this._baseUrl}/${this.controllerName}/Statment`);
    }

    buildClientStatement(vm: StatementParams): Observable<GenericResponseDto<ClientStatmentContainer>> {
        return this.http.post<GenericResponseDto<ClientStatmentContainer>>(`${this._baseUrl}/${this.controllerName}/Statment`, vm, { headers: this.headers });
    }
}
