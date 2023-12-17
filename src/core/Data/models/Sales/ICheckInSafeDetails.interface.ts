import { BaseModel } from '../common/IBase-model.interface';

export interface CheckInSafeDetails extends BaseModel {
    id: number;
    clientName: string;
    checkNum: string;
    checkAmount: number;
    currencyAbbr: string;
    dueDate: string;
    orginalBank: string;
    checkStatus: string;
    paid?: number | null;
    unPaid?: number | null;
    checkAmountForiegn: number;
    selected: boolean;
}
