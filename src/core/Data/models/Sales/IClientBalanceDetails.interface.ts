import { BaseModel } from '../common/IBase-model.interface';

export interface ClientBalanceDetails extends BaseModel {
    currencyId: number;
    amount: number;
    localAmount: number;
    rate: number;
    currencyAbbr: string;
}
