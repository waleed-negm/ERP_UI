import { ExpenseDetails } from '../IExpenseDetails.interface';
import { PaymentDetails } from '../IPaymentDetails.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface Expense extends BaseModel {
    expenseDetails: ExpenseDetails;
    paymentDetails: PaymentDetails;
    isWaitingAreaVisible: boolean;
    isDetailAreaVisible: boolean;
    isMessageAreaVisible: boolean;
    saveURL: string;
    messages: string[];
}
