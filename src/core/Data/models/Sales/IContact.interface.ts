import { AccountChart } from '../GL/IAccount-chart.interface';
import { BaseModel } from '../common/IBase-model.interface';

export interface Contact extends BaseModel {
    name: string;
    nameAR: string;
    phone1?: string;
    phone2?: string;
    email?: string;
    taxationCard?: string;
    isClient: boolean;
    clientAccNum?: string;
    clientAccountDetails?: AccountChart;
    clientBalance: number;
    isSupplier: boolean;
    supplierAccNum?: string | null;
    supplierAccountDetails?: AccountChart;
    supplierBalance: number;
}
