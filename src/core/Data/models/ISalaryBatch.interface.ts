import { BaseModel } from './common/IBase-model.interface';

export interface SalaryBatch extends BaseModel {
    batchMonth: number;
    batchYear: number;
    transId?: string | null;
}
