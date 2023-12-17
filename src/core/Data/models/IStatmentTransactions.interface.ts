import { BaseModel } from './common/IBase-model.interface';

export interface StatmentTransactions extends BaseModel {
    transDate: string;
    debit: number;
    credit: number;
    description: string;
    balanceAfter: number;
    invoiceNum?: number | null;
    purchaseId?: number | null;
}
