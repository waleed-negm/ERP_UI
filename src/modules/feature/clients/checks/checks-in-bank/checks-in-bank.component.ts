import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactCreating } from '../../../../../core/Data/models/Expenditure/IContactCreating.interface';
import { ComponentCommonFunctionality } from '../../../../shared/classes/component-common-functionality';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { CheckInBankContainer } from './../../../../../core/Data/models/Sales/ICheckInBankContainer.interface';
import { CheckInBankDetails } from '../../../../../core/Data/models/Sales/ICheckInBankDetails.interface';
import { TableColumn } from '../../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-checks-in-bank',
    templateUrl: './checks-in-bank.component.html',
})
export class ChecksInBankComponent extends ComponentCommonFunctionality<CheckInBankDetails, ContactCreating> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;
    checkInBankContainer: CheckInBankContainer;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'clientName', header: 'الأسم العميل' } as TableColumn,
            { field: 'checkNum', header: 'رقم الشيك' } as TableColumn,
            { field: 'checkAmount', header: 'مبلغ الشيك' } as TableColumn,
            { field: 'dueDate', header: 'تاريخ الاستحقاق' } as TableColumn,
            { field: 'checkStatus', header: 'حالة الشيك' } as TableColumn,
            { field: 'bankAccountName', header: 'البنك' } as TableColumn,
            { field: 'orginalBank', header: 'علي البنك' } as TableColumn,
            { field: 'bankAccountNumber', header: 'bankAccountNumber' } as TableColumn,
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.nRRepository.checkInBank().subscribe({
            next: (data) => {
                this.checkInBankContainer = data.body;
                this.firstTableData = this.checkInBankContainer.checkDetails;
            },
        });
    };

    collectChecks() {
        this.contextService.nRRepository.collectChecks(this.checkInBankContainer).subscribe();
    }
}
