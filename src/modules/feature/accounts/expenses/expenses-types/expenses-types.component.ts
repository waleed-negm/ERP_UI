import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ComponentCommonFunctionality } from '../../../../shared/classes/component-common-functionality';
import { ExpenseType } from '../../../../../core/Data/models/Expenditure/IExpense-type.interface';
import { TableColumn } from '../../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-expenses-types',
    templateUrl: 'expenses-types.component.html',
})
export class ExpensesTypesComponent extends ComponentCommonFunctionality<ExpenseType, any> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'expenseTypeName', header: 'expense type name' } as TableColumn,
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.expenseTypesRepository.getAll().subscribe({
            next: (data) => {
                this.firstTableData = data.body;
            },
        });
    };

    add() {
        this.contextService.expenseTypesRepository.add(this.formData).subscribe(this.addObserver);
    }
}
