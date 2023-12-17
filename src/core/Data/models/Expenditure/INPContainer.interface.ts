import { NPDetails } from './INPDetails.interface';
import { PaymentDetails } from '../IPaymentDetails.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface NPContainer extends BaseModel {
    checkUnderCollection: NPDetails[];
    checkCashCollection: NPDetails[];
    selectedNote: NPDetails;
    paymentDetails: PaymentDetails;
}
