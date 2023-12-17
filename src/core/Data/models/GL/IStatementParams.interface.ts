import { BaseModel } from '../common/IBase-model.interface';

export interface StatementParams extends BaseModel {
    clientId: number;
    supplierId: number;
    startDate: string;
    endDate: string;
    startBalance: number;
    endBalance: number;
    accNum: string;
}
