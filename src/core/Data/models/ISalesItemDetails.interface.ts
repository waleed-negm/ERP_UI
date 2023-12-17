import { BaseModel } from './common/IBase-model.interface';

export interface SalesItemDetails extends BaseModel {
    storeItemId: number;
    qty: number;
    unitPrice: number;
}
