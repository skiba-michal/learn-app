import {
  CheckboxProps,
  DatePickerProps,
  InputNumberProps,
  InputProps,
  RadioButtonProps,
  SelectProps,
  SwitchProps,
  TextareaProps,
} from "@components";
import { ButtonVariants, LeftRightPosition } from "@interfaces";
import { ChangeEvent } from "react";

export interface FormGeneratorFooter {
  buttonSave: FormGeneratorButtonSettings;
  buttonCancel?: FormGeneratorButtonSettings;
}

export interface FormGeneratorButtonSettings {
  text?: string;
  variant?: "primary" | "secondary";
}

export type FormItemValue = string | boolean | number | null;

export type FormOnChangeValue = string | boolean | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

export type FormGeneratorData = Record<string, FormItemValue>;

export type FormGeneratorErrors = Record<string, string>;

export interface FormValidationInput {
  customValidation?: (value: string, itemId: string, formData: FormGeneratorData) => string;
  password?: boolean;
  email?: boolean;
  maxLength?: number;
  minLength?: number;
}

export interface FormValidationNumber {
  customValidation?: (value: string, itemId: string, formData: FormGeneratorData) => string;
  min?: number;
  max?: number;
}

export interface FormValidationSelect {
  customValidation?: (value: string, itemId: string, formData: FormGeneratorData) => string;
}

export interface FormValidationDatePicker {
  customValidation?: (value: string, itemId: string, formData: FormGeneratorData) => string;
}

export interface FormValidationBoolean {
  customValidation?: (value: boolean, itemId: string, formData: FormGeneratorData) => string;
}

export interface FormItemCheckbox extends CheckboxProps {
  id: string;
  inputFormType: "checkbox";
  handleChange?: (value: boolean, formItem: FormItem) => void;
  defaultValue?: boolean;
  validation?: FormValidationBoolean;
}

export interface FormItemDatePicker extends DatePickerProps {
  id: string;
  inputFormType: "datePicker";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  validation?: FormValidationDatePicker;
}

export interface FormItemInput extends InputProps {
  id: string;
  inputFormType: "input";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  validation?: FormValidationInput;
}

export interface FormItemInputNumber extends InputNumberProps {
  id: string;
  inputFormType: "inputNumber";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  validation?: FormValidationNumber;
}

export interface FormItemRadioButton extends RadioButtonProps {
  id: string;
  inputFormType: "radioButton";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  validation?: FormValidationSelect;
}

export interface FormItemSelect extends SelectProps {
  id: string;
  inputFormType: "select";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  validation?: FormValidationSelect;
}

export interface FormItemSwitch extends SwitchProps {
  id: string;
  inputFormType: "switch";
  handleChange?: (value: boolean, formItem: FormItem) => void;
  defaultValue?: boolean;
  customValidation?: (value: boolean) => string;
  validation?: FormValidationBoolean;
}

export interface FormItemTextarea extends TextareaProps {
  id: string;
  inputFormType: "textarea";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;

  validation?: FormValidationInput;
}

export type FormItem =
  | FormItemCheckbox
  | FormItemDatePicker
  | FormItemInput
  | FormItemInputNumber
  | FormItemRadioButton
  | FormItemSelect
  | FormItemSwitch
  | FormItemTextarea;

export interface CancelButtonProps {
  text: string;
  variant?: ButtonVariants;
  Icon?: React.ReactNode;
  onClick: () => void;
  iconPosition?: LeftRightPosition;
}
export interface SaveButtonProps {
  text?: string;
  variant?: ButtonVariants;
  Icon?: React.ReactNode;
  iconPosition?: LeftRightPosition;
}
