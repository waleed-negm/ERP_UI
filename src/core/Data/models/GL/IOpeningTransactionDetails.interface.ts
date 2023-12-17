import { TransactionSidesEnum } from '../../Enums/transactionSides.enum';
import { BaseModel } from '../common/IBase-model.interface';

export interface OpeningTransactionDetails extends BaseModel {
    accNum: string;
    accountName: string;
    currecnyAbbr: string;
    debit: number;
    credit: number;
    side: TransactionSidesEnum;
    usedRate: number;
    currencyId: number;
}
