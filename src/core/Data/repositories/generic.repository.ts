import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GenericRepository<T, R, RArray = R> {
    private http = inject(HttpClient);
    private _baseUrl: string = environment.apiUrl;
    private _controllerName: string = '';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    setControllerName = (controllerName: string) => (this._controllerName = controllerName);

    add = (item: T): Observable<R> => this.http.post<R>(`${this._baseUrl}/${this._controllerName}`, item, { headers: this.headers });

    getById = (id: number): Observable<R> => this.http.get<R>(`${this._baseUrl}/${this._controllerName}/${id}`, { headers: this.headers });

    getAll = (): Observable<RArray> => this.http.get<RArray>(`${this._baseUrl}/${this._controllerName}`, { headers: this.headers });

    update = (item: T): Observable<R> => this.http.put<R>(`${this._baseUrl}/${this._controllerName}`, item, { headers: this.headers });

    delete = (id: number): Observable<void> => this.http.delete<void>(`${this._baseUrl}/${this._controllerName}`, { headers: this.headers, params: { id: id } });
}
