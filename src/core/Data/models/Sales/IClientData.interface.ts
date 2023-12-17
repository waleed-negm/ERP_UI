import { BaseModel } from '../common/IBase-model.interface';

export interface ClientData extends BaseModel {
    clientId: number;
    clientName: string;
    phone: string;
    balance: number;
}
