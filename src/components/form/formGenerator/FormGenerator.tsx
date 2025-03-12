"use client";
import { InputFormType, InputNumberType, InputType, Option, RadioOption, TextareaResizeType } from "@interfaces";
import { Checkbox, Input } from "@components";
import { ChangeEvent, useEffect, useState } from "react";

export interface FormItem {
  id: string;
  label: string;
  inputFormType: InputFormType;
  type?: InputType;
  options?: Option[] | RadioOption[];
  inputNumberType?: InputNumberType;
  placeholder?: string;
  required?: boolean;
  defaultValue?: FormItemValue;
  disabled?: boolean;
  onChange?: (value: ChangeEvent<HTMLInputElement> | boolean) => void;
  className?: string;
  maxWidth?: string;
  minDate?: string;
  maxDate?: string;
  maxLength?: number;
  resize?: TextareaResizeType;
  rows?: number;
}

type FormItemValue = string | boolean | number | null;

interface FormGeneratorProps {
  formItems: FormItem[];
}

export const FormGenerator = ({ formItems }: FormGeneratorProps) => {
  const [formData, setFormData] = useState<{ [key: string]: FormItemValue }>({});

  useEffect(() => {
    const defaultValues = formItems.reduce((acc: { [key: string]: FormItemValue }, item) => {
      acc[item.id] = item.defaultValue ?? "";
      return acc;
    }, {});
    setFormData(defaultValues);
  }, [formItems]);

  const handleOnChange = (value: ChangeEvent<HTMLInputElement> | boolean, item: FormItem) => {
    const extractedValues = getValue(value, item.inputFormType);
    setFormData((prev) => ({ ...prev, [item.id]: extractedValues }));
    if (item.onChange) item.onChange(value);
  };

  const getValue = (value: ChangeEvent<HTMLInputElement> | boolean, type: InputFormType): FormItemValue => {
    const booleanValuesFormTypes = ["checkbox"];
    const eventFormTypes = ["input", "textarea"];
    if (booleanValuesFormTypes.includes(type)) return value as boolean;
    if (eventFormTypes.includes(type)) return (value as ChangeEvent<HTMLInputElement>).target.value;
    return null;
  }

  return (
    <div>
      {formItems.map((item) => {
        if (item.inputFormType === "input") {
          return (
            <Input
              key={item.id}
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              maxLength={item.maxLength}
              disabled={item.disabled}
              isRequired={item.required}
              value={formData[item.id] as string || ''}
              onChange={(value) => handleOnChange(value, item)}
              maxWidth={item.maxWidth}
              className={item.className}
            />
          );
        }
        if (item.inputFormType === "checkbox") {
          return (
            <Checkbox
              key={item.id}
              label={item.label}
              disabled={item.disabled}
              isRequired={item.required}
              checked={formData[item.id] as boolean}
              onChange={(value) => handleOnChange(value, item)}
              maxWidth={item.maxWidth}
              className={item.className}
            />
          );
        }
        return null;
      })}
    </div>
  );
};