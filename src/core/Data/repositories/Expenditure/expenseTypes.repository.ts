import { Injectable } from '@angular/core';
import { API } from '../../api.constants';
import { GenericRepository } from '../generic.repository';
import { ExpenseType } from '../../models/Expenditure/IExpense-type.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class ExpenseTypesRepository extends GenericRepository<ExpenseType, GenericResponseDto<ExpenseType>, GenericResponseDto<ExpenseType[]>> {
    constructor() {
        super();
        this.setControllerName(API.ExpenseTypes);
    }
}
