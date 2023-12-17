import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormElement } from '../../interfaces/IForm-element.interface';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form-dialog.component.html',
})
export class DynamicFormComponent implements OnInit {
    fb = inject(FormBuilder);

    @Input() formElements: FormElement[];
    @Input() formData: any;
    @Input() header: string;
    @Output() onSave = new EventEmitter<any>();
    @Output() onCancel = new EventEmitter<void>();

    form: FormGroup;
    formTemplateElements: FormElement[];

    ngOnInit() {
        const formControls = {};
        for (const element of this.formElements) {
            formControls[element.id] = [this.formData?.[element.id] ?? null, this.getValidators(element)];
        }
        this.form = this.fb.group(formControls);
        this.formTemplateElements = this.formElements.filter((el) => !el.hidden);
    }

    getValidators(element: FormElement) {
        const validators = [];
        if (element.required) {
            validators.push(Validators.required);
        }
        return validators;
    }

    save() {
        if (this.form.valid) this.onSave.emit(this.form.value);
    }

    cancel = () => this.onCancel.emit();
}
