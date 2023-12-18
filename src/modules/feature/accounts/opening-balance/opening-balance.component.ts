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
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'accNum', header: 'رقم الحساب', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'accountName', header: 'أسم الحساب', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'currecnyAbbr', header: 'العملة', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'debit', header: 'مدين', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'credit', header: 'دائن', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'usedRate', header: 'سعر الصرف', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'side', header: 'side', sortable: true, filterable: true, visible: true, isKey: false },
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
