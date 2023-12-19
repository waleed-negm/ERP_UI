import { Table } from 'primeng/table';
import { TableColumn } from '../interfaces/ITableColumn';
import { Injectable, inject } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { APIContextService } from '../../../core/Data/services/api-context.service';
import { BaseModel } from '../components/generic-details-dialog/IBaseModel.interface';
import { FormElement } from '../interfaces/IForm-element.interface';
import { TableListActionInterface } from '../interfaces/ITable-action.interface';
import { TableSetupFunctions } from '../interfaces/ITable-setup.interface';
import { Subscription } from 'rxjs';

@Injectable()
export class ComponentCommonFunctionality<T extends BaseModel, N extends BaseModel, T2 extends BaseModel = any> implements TableSetupFunctions {
    public contextService = inject(APIContextService);
    public messageService = inject(MessageService);
    public confirmationService = inject(ConfirmationService);

    newButtonLabel: string;
    tableCaption: string;

    submitted: boolean = false;
    showElementDialog: boolean = false;
    showDeleteDialog: boolean = false;

    firstTableData: T[] = [];
    secondTableData: T2[] = [];

    formData: N = {} as N;
    private subscriptions: Subscription[] = [];
    selectedElements: T[] = [];
    firstTableColumns: TableColumn[] = [];
    secondTableColumns: TableColumn[] = [];
    formElements: FormElement[] = [];
    tableActions: TableListActionInterface<any>[] = [];

    addObserver = {
        next: (res) => {
            this.firstTableData.push(res.body);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: res.message, life: 3000 });
        },
        complete: () => {
            this.hideElementDialog();
            this.formData = {} as N;
        },
    };

    ngOnInit() {
        this.setupTableColumns();
        this.setupFormElements();
        this.setupTableActions();
        this.setupTableData();
    }

    setupTableColumns: () => void;
    setupFormElements: () => void;
    setupTableActions: () => void;
    setupTableData: () => void;

    openElementDialog() {
        this.submitted = false;
        this.showElementDialog = true;
    }

    openDeleteElementDialog() {
        this.submitted = false;
        this.showDeleteDialog = true;
    }

    hideElementDialog() {
        this.submitted = false;
        this.showElementDialog = false;
    }

    hideDeleteElementDialog() {
        this.submitted = false;
        this.showDeleteDialog = false;
    }

    editElement(row: N) {
        this.formData = { ...row };
        this.openElementDialog();
    }

    newElement() {
        this.formData = {} as N;
        this.openElementDialog();
    }

    deleteElement(row: N) {
        this.formData = { ...row };
        this.openDeleteElementDialog();
    }

    confirmDelete() {
        this.hideDeleteElementDialog();
        this.firstTableData = this.firstTableData.filter((val) => val.id !== this.formData.id); // should use backend endpoint
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'supplier Deleted', life: 3000 });
        this.formData = {} as N;
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.firstTableData.length; i++) {
            if (this.firstTableData[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    removeNullOrUndefinedProperties(data: N): N {
        const cleanData: N = {} as N;
        Object.entries(data).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                cleanData[key] = value;
            }
        });
        return cleanData;
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}
