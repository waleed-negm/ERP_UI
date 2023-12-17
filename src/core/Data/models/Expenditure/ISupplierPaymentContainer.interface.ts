import { PaymentDetails } from '../IPaymentDetails.interface';
import { SupplierBalanceDetails } from '../ISupplierBalanceDetails.interface';
import { SupplierData } from '../ISupplierData.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface SupplierPaymentContainer extends BaseModel {
    paymentDetails: PaymentDetails;
    supplierBalanceDetails: SupplierBalanceDetails[];
    selectedBalance: SupplierBalanceDetails;
    supplierData: SupplierData;
}
