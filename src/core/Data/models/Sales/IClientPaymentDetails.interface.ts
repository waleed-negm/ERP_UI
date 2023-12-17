import { ClientPaymentMethodEnum } from '../../Enums/clientPaymentMethod.enum';
import { BaseModel } from '../common/IBase-model.interface';

export interface ClientPaymentDetails extends BaseModel {
    paymentMethod: ClientPaymentMethodEnum;
    paymentAmount: number;
    paymentDate: string;
    safeAccNum: string;
    bankAccNum: string;
    checkNum: string;
    dueDate: string;
    originalBank: string;
    description: string;
    receiptNumber: string;
    isSafe: boolean;
    isBank: boolean;
    isCheck: boolean;
}
