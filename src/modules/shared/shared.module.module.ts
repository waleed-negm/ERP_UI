import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared.module-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { GenericDetailsDialogComponent } from './components/generic-details-dialog/generic-details-dialog.component';
import { DynamicFormComponent } from './components/dynamic-form-dialog/dynamic-form-dialog.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [TableComponent, ToolbarComponent, ConfirmationDialogComponent, GenericDetailsDialogComponent, DynamicFormComponent],
    exports: [
        GenericDetailsDialogComponent,
        ConfirmationDialogComponent,
        DynamicFormComponent,
        FileUploadModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TableComponent,
        ToolbarComponent,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        TooltipModule,
    ],
    imports: [
        FileUploadModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TableModule,
        CommonModule,
        SharedModuleRoutingModule,
        ToolbarModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ReactiveFormsModule,
        TooltipModule,
    ],
})
export class SharedModule {}
