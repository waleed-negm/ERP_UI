import { BaseModel } from './common/IBase-model.interface';

export interface PurchaseStoreTransactions extends BaseModel {
    storeItemId: number;
    storeItemName: string;
    qty: number;
    unitPrice: number;
    returnedQty: number;
}
