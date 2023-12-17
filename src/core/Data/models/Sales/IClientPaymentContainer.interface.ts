import { ClientPaymentMethodEnum } from '../../Enums/clientPaymentMethod.enum';
import { BaseModel } from '../common/IBase-model.interface';
import { ClientBalanceDetails } from './IClientBalanceDetails.interface';
import { ClientData } from './IClientData.interface';
import { ClientPaymentDetails } from './IClientPaymentDetails.interface';

export class ClientPaymentContainer implements BaseModel {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdById?: string;
    updatedById?: string;
    deletedAt?: Date;
    deletedById?: string;
    isDeleted: boolean;
    clientData: ClientData;
    clientBalanceDetails: ClientBalanceDetails[] = [];
    selectedBalance: ClientBalanceDetails;
    paymentDetails: ClientPaymentDetails = {
        paymentMethod: ClientPaymentMethodEnum.Safe,
        isSafe: true,
    } as ClientPaymentDetails;
}
