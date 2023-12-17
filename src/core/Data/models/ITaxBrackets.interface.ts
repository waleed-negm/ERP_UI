import { BaseModel } from './common/IBase-model.interface';

export interface TaxBrackets extends BaseModel {
    minValue: number;
    maxValue: number;
    taxPercentage: number;
    isLastBracket: boolean;
    minRange: number;
    maxRange: number;
    startBracket: number;
    withMaxValue: boolean;
}
