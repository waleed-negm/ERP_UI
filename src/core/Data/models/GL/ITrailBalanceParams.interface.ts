import { BaseModel } from '../common/IBase-model.interface';

export interface TrailBalanceParams extends BaseModel {
    startDate: string;
    endDate: string;
}
