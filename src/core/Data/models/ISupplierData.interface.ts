import { BaseModel } from './common/IBase-model.interface';

export interface SupplierData extends BaseModel {
    supplierId: number;
    supplierName: string;
    phone: string;
    balance: number;
}
