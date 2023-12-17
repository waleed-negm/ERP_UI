import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
    @Input() visible: boolean;
    @Input() header: string;
    @Input() message: string;
    @Output() onConfirm = new EventEmitter<void>();
    @Output() onCancel = new EventEmitter<void>();

    confirm() {
        this.onConfirm.emit();
    }

    cancel() {
        this.onCancel.emit();
    }
}
