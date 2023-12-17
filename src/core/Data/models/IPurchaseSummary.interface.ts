import { BaseModel } from './common/IBase-model.interface';

export interface PurchaseSummary extends BaseModel {
    totalAmount: number;
    isVAT: boolean;
    vatAmount: number;
    totalAmountWithVAT: number;
    invoiceNum: string;
    purchaseDate: string;
    description: string;
    currencyId: number;
    vatRate: number; // Defaults to .14M in C#
}
