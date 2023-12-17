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
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'accNum', header: 'رقم الحساب' } as TableColumn,
            { field: 'accountName', header: 'أسم الحساب (ألانجليزي)' } as TableColumn,
            { field: 'accountNameAr', header: 'أسم الحساب (عربي)' } as TableColumn,
            { field: 'accTypeName', header: 'نوع الحساب' } as TableColumn,
            { field: 'balance', header: 'الرصيد' } as TableColumn,
            { field: 'startingBalance', header: 'الرصيد الافتتاحي' } as TableColumn,
            { field: 'isParent', header: 'isParent' } as TableColumn,
            { field: 'currencyAbbr', header: 'العملة' } as TableColumn,
            { field: 'isActive', header: 'isActive' } as TableColumn,
            { field: 'branchName', header: 'الفرع' } as TableColumn,
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
