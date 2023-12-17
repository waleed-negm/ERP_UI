import { BaseModel } from '../common/IBase-model.interface';

export interface AccountList extends BaseModel {
    id: number;
    accNum: string;
    accountName: string;
    accountNameAr: string;
    accTypeName: string;
    balance: number;
    startingBalance: number;
    isParent: boolean;
    currencyAbbr: string;
    isActive: boolean;
    branchName: string;
}
