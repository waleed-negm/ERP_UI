import { SystemModulesEnum } from '../../Enums/systemModules.enum';
import { JournalDetails } from '../IJournalDetails.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface Journal extends BaseModel {
    transDate: string;
    transDesc: string;
    systemModule: SystemModulesEnum;
    userName: string;
    messages: string[];
    docName: string;
    transactionDetails: JournalDetails[];
}
