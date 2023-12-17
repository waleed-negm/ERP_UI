import { BaseModel } from './common/IBase-model.interface';

export interface PurchaseReturnBackDetails extends BaseModel {
    supplierId: number;
    supplierName: string;
    purchaseDate: string;
    totalAmount: number;
    vatAmount: number;
    totalAmountWithVat: number;
    invoiceNum: string;
    currencyId: number;
    currencyAbbr: string;
}
