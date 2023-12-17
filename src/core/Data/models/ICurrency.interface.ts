import { BaseModel } from './common/IBase-model.interface';

export interface Currency extends BaseModel {
    currencyName: string;
    currencyNameAr: string;
    currencyAbbrev: string;
    isDefault: boolean;
    rate: number;
}
