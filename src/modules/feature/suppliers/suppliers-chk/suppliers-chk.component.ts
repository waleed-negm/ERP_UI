import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { NPDetails } from '../../../../core/Data/models/Expenditure/INPDetails.interface';
import { TableComponent } from '../../../shared/components/table/table.component';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';
import { FormElement } from '../../../shared/interfaces/IForm-element.interface';

@Component({
    selector: 'app-suppliers-chk',
    templateUrl: './suppliers-chk.component.html',
})
export class SuppliersChkComponent extends ComponentCommonFunctionality<NPDetails, any, NPDetails> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'supplierName', header: 'أسم المورد', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'chkNum', header: 'رقم الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'amountForgin', header: 'المبلغ', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'amountLocal', header: 'المبلغ بالجنية', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'currencyAbbrev', header: 'العملة', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'dueDate', header: 'تاريخ الأستحقاق', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'bankAccountNum', header: 'الحساب البنكي', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'writingDate', header: 'تاريخ التحرير', sortable: true, filterable: true, visible: true, isKey: false },
        ].reverse();
        this.secondTableColumns = [
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'supplierName', header: 'أسم المورد', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'chkNum', header: 'رقم الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'amountForgin', header: 'المبلغ', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'amountLocal', header: 'المبلغ بالجنية', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'currencyAbbrev', header: 'العملة', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'dueDate', header: 'تاريخ الأستحقاق', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'bankAccountNum', header: 'الحساب البنكي', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'writingDate', header: 'تاريخ التحرير', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'paid', header: 'المدفوع', sortable: true, filterable: true, visible: true, isKey: false },
        ].reverse();
    };

    override setupFormElements = (): void => {
        this.formElements = [
            //     {
            //     label: 'طريقة دفع الايصال',
            //     id: 'type',
            //     type: 'dropdown',
            //     required: true,
            //     options: ['safe', 'bank', 'custody', 'check'],
            //     errorMessage: 'طريقة دفع الايصال مطلوبة.',
            //   } as FormElement,
            {
                label: 'المبلغ المدفوع',
                id: 'amountPaid',
                type: 'text',
                required: true,
                errorMessage: 'المبلغ المدفوع مطلوب.',
            } as FormElement,
            {
                label: 'تاريخ الدفع',
                id: 'paymentDate',
                type: 'text', // You might want to use a date picker here
                required: true,
                errorMessage: 'تاريخ الدفع مطلوب.',
            } as FormElement,
            {
                label: 'رقم الايصال',
                id: 'receiptNumber',
                type: 'text',
                required: true,
                errorMessage: 'رقم الايصال مطلوب.',
            } as FormElement,
            //   {
            //     label: 'الحساب',
            //     id: 'account',
            //     type: 'dropdown',
            //     required: true,
            //     options: ['safe', 'bank', 'custody', 'check'],
            //     errorMessage: 'الحساب مطلوب.',
            //   } as FormElement,
            {
                label: 'التوصيف',
                id: 'description',
                type: 'text',
                required: false, // Not required
            } as FormElement,
        ];
    };

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
