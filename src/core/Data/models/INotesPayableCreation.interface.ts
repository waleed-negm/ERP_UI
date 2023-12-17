import { BaseModel } from './common/IBase-model.interface';

export interface NotesPayableCreation extends BaseModel {
    chkNum: string;
    writingDate: string;
    dueDate: string;
    amountLocal: number;
    amountForgin: number;
    currencyId: number;
    bankAccountNum: string;
    supplierId: number;
}
