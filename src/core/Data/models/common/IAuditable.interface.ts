export interface IAuditable {
    createdAt?: Date;
    updatedAt?: Date;
    createdById?: string | null;
    updatedById?: string | null;
}
