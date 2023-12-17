import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseModel } from './IBaseModel.interface';

@Component({
    selector: 'app-generic-details-dialog',
    templateUrl: './generic-details-dialog.component.html',
})
export class GenericDetailsDialogComponent<T extends BaseModel> {
    @Input() visible: boolean;
    @Input() model: T;
    @Output() onSave = new EventEmitter<void>();
    @Output() onCancel = new EventEmitter<void>();

    getObjectKeys(obj: any): string[] {
        return Object.keys(obj);
    }

    capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    save() {
        this.onSave.emit();
    }

    cancel() {
        this.onCancel.emit();
    }
}
