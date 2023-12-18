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
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'clientName', header: 'الأسم العميل', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkNum', header: 'رقم الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkAmount', header: 'مبلغ الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'dueDate', header: 'تاريخ الاستحقاق', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkStatus', header: 'حالة الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'bankAccountName', header: 'البنك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'orginalBank', header: 'علي البنك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'bankAccountNumber', header: 'bankAccountNumber', sortable: true, filterable: true, visible: true, isKey: false },
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
