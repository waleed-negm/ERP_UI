import { BaseModel } from '../common/IBase-model.interface';

export interface NPDetails extends BaseModel {
    supplierName: string;
    chkNum: string;
    amountForgin: number;
    amountLocal: number;
    currencyAbbrev: string;
    dueDate: string;
    bankAccountNum: string;
    writingDate: string;
    bankAccountName: string;
    supplierId: number;
    paid: number;
    currencyId: number;
}
