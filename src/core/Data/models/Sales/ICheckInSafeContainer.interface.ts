import { CheckInSafeDetails } from './ICheckInSafeDetails.interface';
import { HafzaDetails } from '../IHafzaDetails.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface CheckInSafeContainer extends BaseModel {
    hafzaDetails: HafzaDetails;
    checkDetails: CheckInSafeDetails[];
}
