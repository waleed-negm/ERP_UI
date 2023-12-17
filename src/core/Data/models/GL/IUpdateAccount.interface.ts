import { BaseModel } from '../common/IBase-model.interface';

export interface UpdateAccount extends BaseModel {
    accNum: string;
    balance: number;
    accountName: string;
    accountNameAr: string;
    currencyId: number;
    branchId: number;
    isActive: boolean;
}
