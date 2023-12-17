import { SystemModulesEnum } from '../../Enums/systemModules.enum';
import { BaseModel } from '../common/IBase-model.interface';
import { OpeningTransactionDetails } from './IOpeningTransactionDetails.interface';

export interface OpeningTransaction extends BaseModel {
    currentFinaicialPeriodId: number;
    transDate: string;
    transDesc: string;
    systemModule: SystemModulesEnum;
    userName: string;
    transactionDetails: OpeningTransactionDetails[];
}
