import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ComponentCommonFunctionality } from '../../../../shared/classes/component-common-functionality';
import { ExpenseItem } from '../../../../../core/Data/models/Expenditure/IExpense-item.interface';
import { TableColumn } from '../../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-expenses-items',
    templateUrl: 'expenses-items.component.html',
})
export class ExpensesItemsComponent extends ComponentCommonFunctionality<ExpenseItem, any> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'expenseName', header: 'expense name', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'accNum', header: 'account num', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'expenseTypeId', header: 'expense type id', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'expenseType', header: 'expense type', sortable: true, filterable: true, visible: true, isKey: false },
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.expensesRepository.getAll().subscribe({
            next: (data) => {
                this.firstTableData = data.body;
            },
        });
    };

    add() {
        this.contextService.expensesRepository.create(this.formData).subscribe(this.addObserver);
    }
}
