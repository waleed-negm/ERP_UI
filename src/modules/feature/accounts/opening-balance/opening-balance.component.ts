import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { TableComponent } from '../../../shared/components/table/table.component';
import { OpeningTransaction } from '../../../../core/Data/models/GL/IOpeningTransaction.interface';
import { OpeningTransactionDetails } from '../../../../core/Data/models/GL/IOpeningTransactionDetails.interface';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-opening-balance',
    templateUrl: './opening-balance.component.html',
})
export class OpeningBalanceComponent extends ComponentCommonFunctionality<OpeningTransactionDetails, OpeningTransaction> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;
    openingTransaction: OpeningTransaction;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'accNum', header: 'رقم الحساب' } as TableColumn,
            { field: 'accountName', header: 'أسم الحساب' } as TableColumn,
            { field: 'currecnyAbbr', header: 'العملة' } as TableColumn,
            { field: 'debit', header: 'مدين' } as TableColumn,
            { field: 'credit', header: 'دائن' } as TableColumn,
            { field: 'usedRate', header: 'سعر الصرف' } as TableColumn,
            { field: 'side', header: 'side' } as TableColumn,
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.openBalanceRepository.newBalance().subscribe({
            next: (data) => {
                this.openingTransaction = data.body;
                this.firstTableData = this.openingTransaction.transactionDetails;
            },
        });
    };

    saveOpeningBalance() {
        this.contextService.openBalanceRepository.saveOpeningBalance(this.formData).subscribe(this.addObserver);
    }
}
