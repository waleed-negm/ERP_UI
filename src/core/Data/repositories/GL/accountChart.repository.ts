import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { UpdateAccount } from '../../models/GL/IUpdateAccount.interface';
import { AccountChart } from '../../models/GL/IAccount-chart.interface';
import { CreateAccount } from '../../models/GL/ICreateAccount.interface';
import { AccountList } from '../../models/GL/IAccountList.interface';
import { GenericResponseDto } from './../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class AccountChartRepository {
    private http = inject(HttpClient);
    private _baseUrl: string = environment.apiUrl;
    public controllerName: string = API.AccountChart;
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    getAll(): Observable<GenericResponseDto<AccountList[]>> {
        return this.http.get<GenericResponseDto<AccountList[]>>(`${this._baseUrl}/${this.controllerName}`, { headers: this.headers });
    }

    add(item: CreateAccount): Observable<GenericResponseDto<AccountChart>> {
        return this.http.post<GenericResponseDto<AccountChart>>(`${this._baseUrl}/${this.controllerName}`, item, { headers: this.headers });
    }

    update(item: UpdateAccount): Observable<GenericResponseDto<AccountChart>> {
        return this.http.put<GenericResponseDto<AccountChart>>(`${this._baseUrl}/${this.controllerName}`, item, { headers: this.headers });
    }

    verifyCurrecny(accNum: string, currencyId: number): Observable<GenericResponseDto<boolean>> {
        return this.http.get<GenericResponseDto<boolean>>(`${this._baseUrl}/${this.controllerName}/VerifyCurrecny`, { params: { accNum, currencyId }, headers: this.headers });
    }

    verifyBranch(accNum: string, branchId: number): Observable<GenericResponseDto<boolean>> {
        return this.http.get<GenericResponseDto<boolean>>(`${this._baseUrl}/${this.controllerName}/VerifyBranch`, { params: { accNum, branchId }, headers: this.headers });
    }
}
