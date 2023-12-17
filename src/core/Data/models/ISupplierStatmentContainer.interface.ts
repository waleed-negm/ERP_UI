import { StatementParams } from './GL/IStatementParams.interface';
import { StatmentTransactions } from './IStatmentTransactions.interface';
import { BaseModel } from './common/IBase-model.interface';

export interface SupplierStatmentContainer extends BaseModel {
    reportURL: string;
    statmentParams: StatementParams;
    transactions: StatmentTransactions[];
}
