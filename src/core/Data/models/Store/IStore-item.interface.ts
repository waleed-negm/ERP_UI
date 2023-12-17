import { StoreSystemEnum } from '../../Enums/storeSystem.enum';
import { AccountChart } from '../GL/IAccount-chart.interface';
import { BaseModel } from '../common/IBase-model.interface';
import { Brand } from './IBrand.interface';
import { ProductType } from './IProduct-type.interface';
import { UnitMeasure } from './IUnit-measure.interface';

export interface StoreItem extends BaseModel {
    barCode?: string;
    name: string;
    nameAr: string;
    productTypeId: number;
    productType: ProductType;
    unitMeasureId: number;
    unitMeasure: UnitMeasure;
    brandId: number;
    brand: Brand;
    qty: number;
    balance: number;
    withSN: boolean;
    storeSystem: StoreSystemEnum;
    storeAccNum: string;
    storeAccDetails: AccountChart;
    purchaseAccNum: string;
    purchseAccDetials: AccountChart;
}
