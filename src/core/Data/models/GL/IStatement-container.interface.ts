import { StatementParams as StatementParams } from './IStatementParams.interface';
import { StatmentTransactions as StatementTransactions } from '../IStatmentTransactions.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface StatementContainer extends BaseModel {
    reportURL: string;
    statmentParams: StatementParams;
    transactions: StatementTransactions[];
}
