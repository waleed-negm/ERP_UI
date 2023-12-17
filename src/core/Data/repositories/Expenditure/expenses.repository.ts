import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { Expense } from '../../models/Expenditure/IExpense.interface';
import { ExpenseItem } from '../../models/Expenditure/IExpense-item.interface';
import { ExpenseCreation } from '../../models/Expenditure/IExpense-creation.interface';
import { GenericResponseDto, ResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class ExpensesRepository {
    private http = inject(HttpClient);
    private _baseUrl: string = environment.apiUrl;
    public controllerName: string = API.Expenses;
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    getAll(): Observable<GenericResponseDto<ExpenseItem[]>> {
        return this.http.get<GenericResponseDto<ExpenseItem[]>>(`${this._baseUrl}/${this.controllerName}`);
    }

    create(model: ExpenseCreation): Observable<GenericResponseDto<ExpenseCreation>> {
        return this.http.post<GenericResponseDto<ExpenseCreation>>(`${this._baseUrl}/${this.controllerName}`, model, { headers: this.headers });
    }

    new(): Observable<GenericResponseDto<Expense>> {
        return this.http.get<GenericResponseDto<Expense>>(`${this._baseUrl}/${this.controllerName}/New`);
    }

    save(expense: Expense): Observable<ResponseDto> {
        return this.http.post<ResponseDto>(`${this._baseUrl}/${this.controllerName}/New`, expense, { headers: this.headers });
    }
}
