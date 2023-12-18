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
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'accountType', header: 'account type', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'accountCategory', header: 'account category', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'parentAccNum', header: 'parent account number', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'count', header: 'count', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'balanceSheet', header: 'balance sheet', sortable: true, filterable: true, visible: true, isKey: false }, // الميزانية
            { field: 'incomeStatement', header: 'income statement', sortable: true, filterable: true, visible: true, isKey: false }, // قايمة الدخل
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
