import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared.module-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
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
import { GenericDetailsDialogComponent } from './components/generic-details-dialog/generic-details-dialog.component';
import { DynamicFormComponent } from './components/dynamic-form-dialog/dynamic-form-dialog.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [TableComponent, ToolbarComponent, GenericDetailsDialogComponent, DynamicFormComponent],
    exports: [
        GenericDetailsDialogComponent,
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
        ReactiveFormsModule,
        TooltipModule,
    ],
})
export class SharedModule {}
