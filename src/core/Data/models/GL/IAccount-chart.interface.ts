import { AccountNatureEnum } from '../../Enums/accountNature.enum';
import { AccountChartCounter } from './IAccount-chart-counter.interface';
import { Branch } from '../IBranch.interface';
import { Currency } from '../ICurrency.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface AccountChart extends BaseModel {
    accNum: string;
    accountName: string;
    accountNameAr?: string;
    accTypeId: number;
    accType: AccountChartCounter;
    accountNature: AccountNatureEnum;
    balance: number;
    startingBalance?: number | null;
    isParent: boolean;
    currencyId: number;
    currency: Currency;
    parentAcNum?: string;
    isActive: boolean;
    branchId: number;
    branch: Branch;
}
