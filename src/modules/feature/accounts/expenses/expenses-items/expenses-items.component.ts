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
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'expenseName', header: 'expense name' } as TableColumn,
            { field: 'accNum', header: 'account num' } as TableColumn,
            { field: 'expenseTypeId', header: 'expense type id' } as TableColumn,
            { field: 'expenseType', header: 'expense type' } as TableColumn,
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
