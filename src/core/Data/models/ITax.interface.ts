import { BaseModel } from './common/IBase-model.interface';

export interface Tax extends BaseModel {
    monthlySalary: number;
    yearlyTax?: number | null;
}
