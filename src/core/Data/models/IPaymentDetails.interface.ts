import { SupplierPaymentMethodEnum } from '../Enums/supplierPaymentMethod.enum';
import { BaseModel } from './common/IBase-model.interface';

export interface PaymentDetails extends BaseModel {
    paymentMethod: SupplierPaymentMethodEnum;
    paymentAmount: number;
    paymentDate: string;
    safeAccNum: string;
    bankAccNum: string;
    custodyAccNum: string;
    checkNum: string;
    writingDate: string;
    paymentDueDate: string;
    description: string;
    recieptNumber: string;
    isSafe: boolean;
    isBank: boolean;
    isCheck: boolean;
    isCustody: boolean;
}
