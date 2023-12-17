import { AccountChart } from '../GL/IAccount-chart.interface';
import { BaseModel } from '../common/IBase-model.interface';
import { ExpenseType } from './IExpense-type.interface';

export interface ExpenseItem extends BaseModel {
    expenseName: string;
    accNum: string;
    accountDetail: AccountChart;
    expenseTypeId: number;
    expenseType: ExpenseType;
}
