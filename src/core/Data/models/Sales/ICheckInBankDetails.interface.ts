import { BaseModel } from '../common/IBase-model.interface';

export interface CheckInBankDetails extends BaseModel {
    id: number;
    clientName: string;
    checkNum: string;
    checkAmount: number;
    dueDate: string;
    checkStatus: string;
    bankAccountName: string;
    orginalBank: string;
    bankAccountNumber: string;
    selected: boolean;
}
