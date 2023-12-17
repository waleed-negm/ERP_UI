import { ClientData } from './IClientData.interface';
import { SalesItemDetails } from '../ISalesItemDetails.interface';
import { SalesSummary } from '../ISalesSummary.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface SalesContainer extends BaseModel {
    clientData: ClientData;
    salesItemDetails: SalesItemDetails[];
    salesSummary: SalesSummary;
    saveURL: string;
}
