import { BaseModel } from '../common/IBase-model.interface';
import { TrailBalanceItem } from './ITrailBalanceItem.interface';
import { TrailBalanceParams } from './ITrailBalanceParams.interface';

export interface TrailBalanceContainer extends BaseModel {
    trailBalanceParams: TrailBalanceParams;
    trailBalanceItems: TrailBalanceItem[];
    totalStartingBalanceDebit: number;
    totalStartingBalanceCredit: number;
    grandTotalAmountDebit: number;
    grandTotalAmountCredit: number;
    totalEndingBalanceDebit: number;
    totalEndingBalanceCredit: number;
    reportURL: string;
}
