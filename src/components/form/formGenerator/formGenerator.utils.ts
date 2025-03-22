import { InputFormType } from "@interfaces";
import { FormItem, FormItemValue, FormOnChangeValue } from "./formGenerator.interfaces";
import { emailRegex, passwordRegex } from "@utils";
import { ChangeEvent } from "react";

export const booleanValuesFormTypes: InputFormType[] = ["checkbox", "switch"] as const;
export const eventFormTypes: InputFormType[] = ["input", "textarea"] as const;
export const stringFromTypes: InputFormType[] = ["datePicker", "inputNumber", "radioButton", "select"] as const;

export const handleValidationInput = (value: string, item: FormItem) => {
  if (item.validation && "maxLength" in item.validation && item.validation.maxLength && value.length > item.validation.maxLength)
    return `Maksymalna długość to ${item.validation.maxLength} znaków`;

  if (item.validation && "minLength" in item.validation && item.validation.minLength && value.length < item.validation.minLength)
    return `Minimalna długość to ${item.validation.minLength} znaków`;

  if (item.validation && "email" in item.validation && item.validation.email && !emailRegex.test(value)) return "Niepoprawny adres email";

  if (item.validation && "password" in item.validation && item.validation.password && !passwordRegex.test(value))
    return "Hasło musi zawierać co najmniej: jedną małą literę, jedną dużą literę i jeden znak specjalny";
};

export const handleValidationInputNumber = (value: string, item: FormItem) => {
  if (item.validation && "min" in item.validation && (item.validation.min || item.validation.min === 0) && +value < item.validation.min)
    return `Minimalna wartość to ${item.validation.min}`;

  if (item.validation && "max" in item.validation && (item.validation.max || item.validation.max === 0) && +value > item.validation.max)
    return `Maksymalna wartość to ${item.validation.max}`;
};

export const getValue = (value: FormOnChangeValue, type: InputFormType): FormItemValue => {
  if (booleanValuesFormTypes.includes(type)) return value as boolean;
  if (eventFormTypes.includes(type)) return (value as ChangeEvent<HTMLInputElement>).target.value;
  if (stringFromTypes.includes(type)) return value as string;
  return null;
};
