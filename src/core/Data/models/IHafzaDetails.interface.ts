import { BaseModel } from './common/IBase-model.interface';

export interface HafzaDetails extends BaseModel {
    id: number;
    bankAccNum: string;
    hafzaDate: string;
    hafzaName: string;
}
