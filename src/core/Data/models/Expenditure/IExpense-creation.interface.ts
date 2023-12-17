import { BaseModel } from '../common/IBase-model.interface';

export interface ExpenseCreation extends BaseModel {
    expenseName: string;
    expenseTypeId: number;
}
