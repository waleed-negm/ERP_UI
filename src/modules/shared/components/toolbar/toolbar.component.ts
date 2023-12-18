import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
    @Input() newButtonLabel: string;
    @Input() newButtonIcon: string = 'pi pi-plus';
    @Input() isDeleteButtonEnabled: boolean = false;
    @Input() canDelete: boolean = true;

    @Output() newClick = new EventEmitter<void>();
    @Output() deleteClick = new EventEmitter<void>();
    @Output() exportCSVClick = new EventEmitter<void>();
    @Output() exportExcelClick = new EventEmitter<void>();
    @Output() exportPDFClick = new EventEmitter<void>();

    onNewClick() {
        this.newClick.emit();
    }

    onDeleteClick() {
        this.deleteClick.emit();
    }

    onExportCSVClick() {
        this.exportCSVClick.emit();
    }

    onExportExcel() {
        this.exportExcelClick.emit();
    }

    onExportPdf() {
        this.exportPDFClick.emit();
    }
}

//todo: handle delete selected
