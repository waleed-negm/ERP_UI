import { BaseModel } from './common/IBase-model.interface';

export interface TransSummary extends BaseModel {
    debit: number;
    credit: number;
}
