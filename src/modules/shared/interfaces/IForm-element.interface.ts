export class FormElement {
    id: string;
    label: string;
    type: ValidInputTypes;
    required: boolean = true;
    errorMessage: string | null;
    placeHolder: string;
    hidden: boolean = false;
}
type ValidInputTypes =
    | 'text'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'number'
    | 'email'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'color'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    | 'textarea'
    | 'select';
