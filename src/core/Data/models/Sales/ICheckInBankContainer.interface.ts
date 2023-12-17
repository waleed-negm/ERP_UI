import { BaseModel } from '../common/IBase-model.interface';
import { CheckInBankDetails } from './ICheckInBankDetails.interface';

export interface CheckInBankContainer extends BaseModel {
    checkDetails: CheckInBankDetails[];
}
