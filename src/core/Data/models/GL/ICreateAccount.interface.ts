import { BaseModel } from '../common/IBase-model.interface';

export interface CreateAccount extends BaseModel {
    accountName: string;
    accountNameAr: string;
    accTypeId: number;
    currencyId: number;
    branchId: number;
}
