export interface Option {
  label: string;
  value: string;
}

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type InputFormType = 'checkbox' | 'datePicker' | 'input' | 'inputNumber' | 'radioButton' | 'select' | 'switch' | 'textarea';

export type TextareaResizeType = "none" | "vertical" | "horizontal" | "both";
export type InputNumberType = 'integer' | 'float';
export type InputType = 'text' | 'password' | 'email';