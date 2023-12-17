export interface ISoftDeleted {
    deletedAt?: Date;
    deletedById?: string | null;
    isDeleted: boolean;
}
