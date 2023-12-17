import { BaseModel } from './common/IBase-model.interface';

export interface ExpenseDetails extends BaseModel {
    expenseItemId: number;
    supplierId?: number | null;
    expenseDate: string;
    amount: number;
    currencyId: number;
    costCenterId?: number | null;
}
