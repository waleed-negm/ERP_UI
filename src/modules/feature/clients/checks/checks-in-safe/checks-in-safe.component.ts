import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ComponentCommonFunctionality } from '../../../../shared/classes/component-common-functionality';
import { CheckInSafeDetails } from '../../../../../core/Data/models/Sales/ICheckInSafeDetails.interface';
import { CheckInSafeContainer } from './../../../../../core/Data/models/Sales/ICheckInSafeContainer.interface';
import { TableColumn } from '../../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-checks-in-safe',
    templateUrl: './checks-in-safe.component.html',
})
export class ChecksInSafeComponent extends ComponentCommonFunctionality<CheckInSafeDetails, any> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    checkInSafeContainer: CheckInSafeContainer;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'clientName', header: 'الأسم العميل' } as TableColumn,
            { field: 'checkNum', header: 'رقم الشيك' } as TableColumn,
            { field: 'checkAmount', header: 'مبلغ الشيك' } as TableColumn,
            { field: 'currencyAbbr', header: 'العملة' } as TableColumn,
            { field: 'dueDate', header: 'تاريخ الاستحقاق' } as TableColumn,
            { field: 'orginalBank', header: 'orginalBank' } as TableColumn,
            { field: 'checkStatus', header: 'حالة الشيك' } as TableColumn,
            { field: 'paid', header: 'المدفوع' } as TableColumn,
            { field: 'unPaid', header: 'unPaid' } as TableColumn,
            { field: 'checkAmountForiegn', header: 'checkAmountForiegn' } as TableColumn,
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.nRRepository.checkInSafe().subscribe({
            next: (data) => {
                this.checkInSafeContainer = data.body;
                this.firstTableData = this.checkInSafeContainer.checkDetails;
            },
        });
    };

    moveToBank() {
        this.contextService.nRRepository.moveToBank(this.checkInSafeContainer).subscribe();
    }
}
