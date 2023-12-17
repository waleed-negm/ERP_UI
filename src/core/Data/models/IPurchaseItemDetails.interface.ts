import { BaseModel } from './common/IBase-model.interface';

export interface PurchaseItemDetails extends BaseModel {
    storeItemId: number;
    qty: number;
    unitPrice: number;
    expiryDate: string;
    sn: string;
}
