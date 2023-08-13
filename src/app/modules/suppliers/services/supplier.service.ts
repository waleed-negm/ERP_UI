import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Supplier } from '../models/ISupplier';
import { ResponseModel } from '../models/Iresponse';

@Injectable({
    providedIn: 'root',
})
export class SupplierService {
    constructor(public http: HttpClient) {}
    uri: string = `${environment.apiUrl}Supplier`;
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    getAll = () => this.http.get<ResponseModel>(`${this.uri}`, { headers: this.headers });

    add = (model: Supplier) => this.http.post<ResponseModel>(`${this.uri}`, model, { headers: this.headers });
}
