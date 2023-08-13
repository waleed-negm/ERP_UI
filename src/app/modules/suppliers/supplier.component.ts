import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { SupplierService } from './services/supplier.service';
import { Supplier } from './models/ISupplier';
import { ResponseModel } from './models/Iresponse';

@Component({
    selector: 'app-suppliers-crud',
    templateUrl: './supplier.component.html',
})
export class SupplierComponent implements OnInit {
    supplierDialog: boolean = false;
    deleteSupplierDialog: boolean = false;
    deleteSuppliersDialog: boolean = false;
    suppliers: Supplier[] = [];
    supplier: Supplier = {} as Supplier;
    selectedSuppliers: Supplier[] = [];
    submitted: boolean = false;
    cols: any[] = [];
    statuses: any[] = [];
    rowsPerPageOptions = [5, 10, 20];
    constructor(private supplierService: SupplierService, private messageService: MessageService) {}
    ngOnInit() {
        this.supplierService.getAll().subscribe({
            next: (data: ResponseModel) => {
                this.suppliers = data.body as Supplier[];
            },
        });
        this.cols = [
            { field: 'id', header: 'id' },
            { field: 'name', header: 'english name' },
            { field: 'nameAR', header: 'arabic name' },
            { field: 'phone1', header: 'phone 1' },
            { field: 'phone2', header: 'phone 2' },
            { field: 'email', header: 'email' },
            { field: 'supplierBalance', header: 'supplier Balance' },
        ];
    }
    openNew() {
        this.supplier = {} as Supplier;
        this.submitted = false;
        this.supplierDialog = true;
    }
    deleteSelectedSuppliers() {
        this.deleteSupplierDialog = true;
    }
    editSupplier(supplier: Supplier) {
        this.supplier = { ...supplier };
        this.supplierDialog = true;
    }
    deleteSupplier(supplier: Supplier) {
        this.deleteSupplierDialog = true;
        this.supplier = { ...supplier };
    }
    confirmDeleteSelected() {
        this.deleteSupplierDialog = false;
        this.suppliers = this.suppliers.filter((val) => !this.selectedSuppliers.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'suppliers Deleted', life: 3000 });
        this.selectedSuppliers = [];
    }
    confirmDelete() {
        this.deleteSupplierDialog = false;
        this.suppliers = this.suppliers.filter((val) => val.id !== this.supplier.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'supplier Deleted', life: 3000 });
        this.supplier = {} as Supplier;
    }
    hideDialog() {
        this.supplierDialog = false;
        this.submitted = false;
    }
    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.suppliers.length; i++) {
            if (this.suppliers[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    add() {
        this.supplierService.add(this.supplier).subscribe({
            next: (res) => {
                this.suppliers.push(res.body);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: res.message, life: 3000 });
            },
            complete: () => {
                this.supplierDialog = false;
                this.supplier = {} as Supplier;
            },
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
