export class FormElement {
    id: string;
    label: string;
    placeHolder: string;
    type: ValidInputTypes;
    required: boolean = true;
    errorMessage: string | null;
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
