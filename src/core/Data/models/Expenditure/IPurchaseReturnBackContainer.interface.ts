import { PurchaseReturnBackDetails } from '../IPurchaseReturnBackDetails.interface';
import { PurchaseStoreTransactions } from '../IPurchaseStoreTransactions.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface PurchaseReturnBackContainer extends BaseModel {
    purchaseId: number;
    purchaseDetails: PurchaseReturnBackDetails;
    purchaseStoreDetails: PurchaseStoreTransactions[];
}
