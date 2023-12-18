import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountList } from '../../../../core/Data/models/GL/IAccountList.interface';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { TableComponent } from '../../../shared/components/table/table.component';
import { CreateAccount } from '../../../../core/Data/models/GL/ICreateAccount.interface';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-accounts-list',
    templateUrl: './accounts-list.component.html',
})
export class AccountsListComponent extends ComponentCommonFunctionality<AccountList, CreateAccount> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'accNum', header: 'رقم الحساب', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'accountName', header: 'أسم الحساب (ألانجليزي)', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'accountNameAr', header: 'أسم الحساب (عربي)', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'accTypeName', header: 'نوع الحساب', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'balance', header: 'الرصيد', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'startingBalance', header: 'الرصيد الافتتاحي', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'isParent', header: 'isParent', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'currencyAbbr', header: 'العملة', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'isActive', header: 'isActive', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'branchName', header: 'الفرع', sortable: true, filterable: true, visible: true, isKey: false },
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.accountChartRepository.getAll().subscribe({
            next: (data) => {
                this.firstTableData = data.body;
            },
        });
    };
}
