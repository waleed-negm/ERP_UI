import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../../../../core/Data/models/Expenditure/ISupplierDto.interface';
import { TableComponent } from '../../../shared/components/table/table.component';
import { ComponentCommonFunctionality } from '../../../shared/classes/component-common-functionality';
import { ContactCreating } from '../../../../core/Data/models/Expenditure/IContactCreating.interface';
import { FormElement } from '../../../shared/interfaces/IForm-element.interface';
import { TableColumn } from '../../../shared/interfaces/ITableColumn';

@Component({
    selector: 'app-suppliers-crud',
    templateUrl: './supplier.component.html',
})
export class SupplierComponent extends ComponentCommonFunctionality<Supplier, ContactCreating> implements OnInit, OnDestroy {
    @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

    override tableCaption: string = '';

    override setupTableColumns = (): void => {
        this.firstTableColumns = [
            { field: 'id', header: '#', sortable: true, filterable: true, visible: true, isKey: true },
            { field: 'nameAR', header: 'الأسم', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'name', header: 'الأسم (ألانجليزي)', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'phone1', header: 'التليفون 1', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'phone2', header: 'التليفون 2', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'email', header: 'البريد الالكتروني', sortable: true, filterable: true, visible: true, isKey: false },
            { field: 'supplierBalance', header: 'الرصيد', sortable: true, filterable: true, visible: true, isKey: false },
        ].reverse();
    };

    override setupFormElements = (): void => {
        this.formElements = [
            { label: 'English Name', id: 'name', type: 'text', errorMessage: 'English Name is required.' } as FormElement,
            { label: 'Arabic Name', id: 'nameAR', type: 'text', errorMessage: 'Arabic Name is required.' } as FormElement,
            { label: 'Phone 1', id: 'phone1', type: 'text', errorMessage: 'Phone is required.' } as FormElement,
            { label: 'Phone 2', id: 'phone2', type: 'text', required: false } as FormElement,
            { label: 'Email', id: 'email', type: 'text', errorMessage: 'Email is required.' } as FormElement,
            { label: 'id', id: 'id', type: 'number', required: false, hidden: true } as FormElement,
        ];
    };

    override setupTableActions = (): void => {
        this.tableActions = [
            {
                callback: (row: ContactCreating) => this.delete(row),
                icon: 'pi pi-trash',
                class: 'p-button-text p-button-rounded p-button-danger',
                tooltip: 'delete',
            },
            {
                callback: (row: ContactCreating) => this.editElement(row),
                icon: 'pi pi-pencil',
                class: 'p-button-text p-button-rounded p-button-secondary mr-2',
                tooltip: 'edit',
            },
            {
                callback: (row: ContactCreating) => this.purchase(row),
                icon: 'pi pi-calculator',
                class: 'p-button-text p-button-rounded p-button-secondary mr-2',
                tooltip: 'purchase',
            },
            {
                callback: (row: ContactCreating) => this.payment(row),
                icon: 'pi pi-money-bill',
                class: 'p-button-text p-button-rounded p-button-secondary mr-2',
                tooltip: 'payment',
            },
        ];
    };

    override setupTableData = (): void => {
        this.contextService.supplierRepository.getAll().subscribe({
            next: (data) => {
                this.firstTableData = data.body;
            },
        });
    };

    delete(data: any) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            },
        });
    }

    purchase(data: any) {}

    payment(data: any) {}

    save(data: ContactCreating): void {
        const cleanData = this.removeNullOrUndefinedProperties(data);
        !cleanData.id ? this.add(cleanData) : this.update(cleanData);
    }

    add = (data: ContactCreating) => this.contextService.supplierRepository.create(data).subscribe(this.addObserver);

    update = (data: ContactCreating) => this.contextService.supplierRepository.create(data).subscribe(this.addObserver);
}
