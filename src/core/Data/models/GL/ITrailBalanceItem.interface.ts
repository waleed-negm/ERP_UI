import { BaseModel } from '../common/IBase-model.interface';

export interface TrailBalanceItem extends BaseModel {
    accNum: string;
    accName: string;
    startingBalanceDebit: number;
    startingBalanceCredit: number;
    totalAmountDebit: number;
    totalAmountCredit: number;
    endingBalanceDebit: number;
    endingBalanceCredit: number;
}
