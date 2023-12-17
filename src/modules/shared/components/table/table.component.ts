import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TableColumn } from './IColumn.interface';
import { TableActions } from '../../classes/table-actions';
import { TableListActionInterface } from '../../interfaces/ITable-action.interface';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
    @Input() selectedElements: any[] = [];
    @Input() selectionMode: string = 'multiple';
    @Input() tableData: any[] = [];
    @Input() tableColumns: TableColumn[] = [];
    @Input() element: any;
    @Input() rowsPerPageOptions: number[] = [10, 20, 30];
    @Input() rowsCount: number = 10;
    @Input() caption: string = '';
    @Input() hasPaginator: boolean = true;
    @Input() rowHover: boolean = true;
    @Input() canEdit: boolean = true;
    @Input() canDelete: boolean = true;
    @Input() tableActions: TableListActionInterface<any>[] = [];

    @Output() selectedElementsChange = new EventEmitter<any[]>();

    @ViewChild('dt') table: Table;

    globalFilterFields: string[] = [];
    dataKey: string = '';

    ngOnInit(): void {
        this.globalFilterFields = this.tableColumns.filter((col) => col.canFilter).map((col) => col.field);
        this.dataKey = this.tableColumns.find((col) => col.isKey)?.field;
    }

    onGlobalFilter(table: Table, event: Event) {
        const inputElement = event.target as HTMLInputElement;
        table.filterGlobal(inputElement.value, 'contains');
    }
}
