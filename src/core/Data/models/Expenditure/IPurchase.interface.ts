import { Currency } from '../ICurrency.interface';
import { BaseModel } from '../common/IBase-model.interface';
import { Supplier } from './ISupplierDto.interface';

export interface Purchase extends BaseModel {
    supplierId: number;
    supplierDetails: Supplier;
    purchaseDate: Date;
    totalAmount: number;
    isVAT: boolean;
    vatAmount: number;
    totalAmountWithVAT: number;
    isFullyPaid: boolean;
    paid: number;
    invoiceNum: string;
    currencyId: number;
    currency: Currency;
}
