import { TransactionSidesEnum } from '../Enums/transactionSides.enum';
import { BaseModel } from './common/IBase-model.interface';

export interface JournalDetails extends BaseModel {
    jornalDetailId: number;
    accNum: string;
    side: TransactionSidesEnum;
    debit: number;
    credit: number;
    usedRate: number;
    currecnyAbbr: string;
    currencyId: number;
}
