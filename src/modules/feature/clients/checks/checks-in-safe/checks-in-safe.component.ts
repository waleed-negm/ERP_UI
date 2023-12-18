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
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'clientName', header: 'الأسم العميل', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkNum', header: 'رقم الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkAmount', header: 'مبلغ الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'currencyAbbr', header: 'العملة', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'dueDate', header: 'تاريخ الاستحقاق', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'orginalBank', header: 'orginalBank', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkStatus', header: 'حالة الشيك', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'paid', header: 'المدفوع', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'unPaid', header: 'unPaid', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'checkAmountForiegn', header: 'checkAmountForiegn', sortable: true, filterable: true, visible: true, isKey: false },
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
