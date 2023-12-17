import { AccountCategoryEnum } from '../../Enums/accountCategory.enum';
import { BaseModel } from '../common/IBase-model.interface';

export interface AccountChartCounter extends BaseModel {
    accountType: string;
    accountCategory: AccountCategoryEnum;
    parentAccNum?: string;
    count: number;
    balanceSheet: boolean;
    incomeStatement: boolean;
}
