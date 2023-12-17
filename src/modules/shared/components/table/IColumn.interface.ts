// column.interface.ts

export interface TableColumn {
    field: string;
    header: string;
    canFilter: boolean;
    isKey: boolean;
}
