import { BaseModel } from './common/IBase-model.interface';

export interface SalesSummary extends BaseModel {
    invoiceDate: string;
    totalAmount: number;
    currencyId: number;
    isVAT: boolean;
    vatRate: number; // Defaults to .14M in C#
    vatAmount: number;
    totalWithVAT: number;
    description: string;
}
