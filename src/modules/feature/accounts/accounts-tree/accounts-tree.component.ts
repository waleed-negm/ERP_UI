import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { TableComponent } from '../../../shared/components/table/table.component';
import { AccountChartCounter } from '../../../../core/Data/models/GL/IAccount-chart-counter.interface';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-accounts-tree',
    templateUrl: './accounts-tree.component.html',
})
export class AccountsTreeComponent extends ComponentCommonFunctionality<AccountChartCounter, AccountChartCounter> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'accountType', header: 'account type' } as TableColumn,
            { field: 'accountCategory', header: 'account category' } as TableColumn,
            { field: 'parentAccNum', header: 'parent account number' } as TableColumn,
            { field: 'count', header: 'count' } as TableColumn,
            { field: 'balanceSheet', header: 'balance sheet' } as TableColumn, // الميزانية
            { field: 'incomeStatement', header: 'income statement' } as TableColumn, // قايمة الدخل
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.accountChartCounterRepository.getAll().subscribe({
            next: (data) => {
                this.firstTableData = data.body;
            },
        });
    };

    add() {
        this.contextService.accountChartCounterRepository.add(this.formData).subscribe();
    }
}
