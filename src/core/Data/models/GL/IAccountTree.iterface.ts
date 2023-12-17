import { AccountCategoryEnum } from '../../Enums/accountCategory.enum';

export interface AccountTree {
    id: number;
    accountType: string;
    accountCategory: AccountCategoryEnum;
    parentAccNum: string;
    count: number;
    balanceSheet: boolean;
    incomeStatement: boolean;
}
