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
import { ChangeEvent } from "react";

export interface FormItemCheckbox extends CheckboxProps {
  id: string;
  inputFormType: "checkbox";
  handleChange?: (value: boolean, formItem: FormItem) => void;
  defaultValue?: boolean;
  customValidation?: (value: boolean) => string;
}

export interface FormItemDatePicker extends DatePickerProps {
  id: string;
  inputFormType: "datePicker";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  customValidation?: (value: string) => string;
}

export interface FormItemInput extends InputProps {
  id: string;
  inputFormType: "input";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  customValidation?: (value: string) => string;
}

export interface FormItemInputNumber extends InputNumberProps {
  id: string;
  inputFormType: "inputNumber";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  customValidation?: (value: string) => string;
}

export interface FormItemRadioButton extends RadioButtonProps {
  id: string;
  inputFormType: "radioButton";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  customValidation?: (value: string) => string;
}

export interface FormItemSelect extends SelectProps {
  id: string;
  inputFormType: "select";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  customValidation?: (value: string) => string;
}

export interface FormItemSwitch extends SwitchProps {
  id: string;
  inputFormType: "switch";
  handleChange?: (value: boolean, formItem: FormItem) => void;
  defaultValue?: boolean;
  customValidation?: (value: boolean) => string;
}

export interface FormItemTextarea extends TextareaProps {
  id: string;
  inputFormType: "textarea";
  handleChange?: (value: string, formItem: FormItem) => void;
  defaultValue?: string;
  customValidation?: (value: string) => string;
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

export type isStringOrBooleanType = "string" | "boolean" | null;