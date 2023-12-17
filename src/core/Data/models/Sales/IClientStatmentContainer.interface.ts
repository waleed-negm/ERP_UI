import { StatementParams } from '../GL/IStatementParams.interface';
import { StatmentTransactions } from '../IStatmentTransactions.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface ClientStatmentContainer extends BaseModel {
    reportURL: string;
    statmentParams: StatementParams;
    transactions: StatmentTransactions[];
}
