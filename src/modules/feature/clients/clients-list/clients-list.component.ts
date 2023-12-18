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
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'nameAR', header: 'الأسم', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'name', header: 'الأسم (ألانجليزي)', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'phone1', header: 'التليفون 1', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'phone2', header: 'التليفون 2', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'email', header: 'البريد الالكتروني', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'clientBalance', header: 'الرصيد', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'clientAccNum', header: 'clientAccNum', sortable: true, filterable: true, visible: true, isKey: false },
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
