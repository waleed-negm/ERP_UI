import { StoreSystemEnum } from '../../Enums/storeSystem.enum';
import { BaseModel } from '../common/IBase-model.interface';

export interface StoreItemCreation extends BaseModel {
    id: number;
    barCode: string;
    name: string;
    nameAr: string;
    productTypeId: number;
    unitMeasureId: number;
    brandId: number;
    withSN: boolean;
    storeSystem: StoreSystemEnum;
}
