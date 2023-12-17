import { PurchaseItemDetails } from '../IPurchaseItemDetails.interface';
import { PurchaseSummary } from '../IPurchaseSummary.interface';
import { SupplierData } from '../ISupplierData.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface PurchaseContainer extends BaseModel {
    supplierData: SupplierData;
    purchaseSummary: PurchaseSummary;
    purchaseDetails: PurchaseItemDetails[];
    isWaitingAreaVisible: boolean;
    isDetailAreaVisible: boolean;
    isMessageAreaVisible: boolean;
    saveURL: string;
    messages: string[];
    invoiceFile?: File;
}
