import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { NPDetails } from '../../../../core/Data/models/Expenditure/INPDetails.interface';
import { TableComponent } from '../../../shared/components/table/table.component';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-suppliers-chk',
    templateUrl: './suppliers-chk.component.html',
})
export class SuppliersChkComponent extends ComponentCommonFunctionality<NPDetails, any, NPDetails> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'supplierName', header: 'أسم المورد' } as TableColumn,
            { field: 'chkNum', header: 'رقم الشيك' } as TableColumn,
            { field: 'amountForgin', header: 'المبلغ' } as TableColumn,
            { field: 'amountLocal', header: 'المبلغ بالجنية' } as TableColumn,
            { field: 'currencyAbbrev', header: 'العملة' } as TableColumn,
            { field: 'dueDate', header: 'تاريخ الأستحقاق' } as TableColumn,
            { field: 'bankAccountNum', header: 'الحساب البنكي' } as TableColumn,
            { field: 'writingDate', header: 'تاريخ التحرير' } as TableColumn,
        ].reverse();
        this.secondTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'supplierName', header: 'أسم المورد' } as TableColumn,
            { field: 'chkNum', header: 'رقم الشيك' } as TableColumn,
            { field: 'amountForgin', header: 'المبلغ' } as TableColumn,
            { field: 'amountLocal', header: 'المبلغ بالجنية' } as TableColumn,
            { field: 'currencyAbbrev', header: 'العملة' } as TableColumn,
            { field: 'dueDate', header: 'تاريخ الأستحقاق' } as TableColumn,
            { field: 'bankAccountNum', header: 'الحساب البنكي' } as TableColumn,
            { field: 'writingDate', header: 'تاريخ التحرير' } as TableColumn,
            { field: 'paid', header: 'المدفوع' } as TableColumn,
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.nPRepository.manageNP().subscribe({
            next: (data) => {
                this.firstTableData = data.body.checkCashCollection;
                this.secondTableData = data.body.checkUnderCollection;
            },
        });
    };

    collectCheck() {
        this.contextService.nPRepository.collectCheck(this.formData).subscribe();
    }
}
