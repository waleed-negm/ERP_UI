import { BaseModel } from './common/IBase-model.interface';

export interface Supplier extends BaseModel {
    id: number;
    name: string;
    nameAR: string;
    phone1: string;
    phone2: string;
    email: string;
    supplierBalance: number;
}
