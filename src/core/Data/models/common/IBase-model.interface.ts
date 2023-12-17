import { IAuditable } from './IAuditable.interface';
import { ISoftDeleted } from './ISoft-deleted.interface';

export interface BaseModel extends IAuditable, ISoftDeleted {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdById?: string;
    updatedById?: string;
    deletedAt?: Date;
    deletedById?: string;
    isDeleted: boolean;
}
