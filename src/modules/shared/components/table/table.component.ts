import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TableListActionInterface } from '../../interfaces/ITable-action.interface';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ExportColumn } from '../../interfaces/IExport-column.interface';
import { TableColumn } from '../../interfaces/ITableColumn';

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
    exportColumns: ExportColumn[] = [];
    dataKey: string = '';

    ngOnInit(): void {
        this.globalFilterFields = this.tableColumns.filter((col) => col.filterable).map((col) => col.field);
        this.dataKey = this.tableColumns.find((col) => col.isKey)?.field;
        this.exportColumns = this.tableColumns.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    onGlobalFilter(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.table.filterGlobal(inputElement.value, 'contains');
    }

    public exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('p', 'px', 'a4');
                (doc as any).autoTable(this.exportColumns, this.tableData);
                doc.save('products.pdf');
            });
        });
    }

    public exportExcel() {
        const worksheet = XLSX.utils.json_to_sheet(this.tableData);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'products');
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE,
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
}
