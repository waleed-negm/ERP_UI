import { BaseModel } from '../components/generic-details-dialog/IBaseModel.interface';

export interface TableListActionInterface<T extends BaseModel> {
    callback: (data: T) => void;
    label?: string;
    icon?: string;
    tooltip?: string;
    class?: string;
}
