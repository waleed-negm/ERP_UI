import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { ContactCreating } from '../../../../core/Data/models/Expenditure/IContactCreating.interface';
import { TableComponent } from '../../../shared/components/table/table.component';
import { Contact } from '../../../../core/Data/models/Sales/IContact.interface';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-clients-list',
    templateUrl: './clients-list.component.html',
})
export class ClientsListComponent extends ComponentCommonFunctionality<Contact, ContactCreating> implements OnInit {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', isKey: true } as TableColumn,
            { field: 'nameAR', header: 'الأسم' } as TableColumn,
            { field: 'name', header: 'الأسم (ألانجليزي)' } as TableColumn,
            { field: 'phone1', header: 'التليفون 1' } as TableColumn,
            { field: 'phone2', header: 'التليفون 2' } as TableColumn,
            { field: 'email', header: 'البريد الالكتروني' } as TableColumn,
            { field: 'clientBalance', header: 'الرصيد' } as TableColumn,
            { field: 'clientAccNum', header: 'clientAccNum' } as TableColumn,
        ].reverse();
    };

    override setupFormElements = (): void => {};

    override setupTableActions = (): void => {};

    override setupTableData = (): void => {
        this.contextService.clientsRepository.getAll().subscribe({
            next: (data) => {
                this.firstTableData = data.body;
            },
        });
    };

    add() {
        this.contextService.clientsRepository.create(this.formData).subscribe(this.addObserver);
    }
}
