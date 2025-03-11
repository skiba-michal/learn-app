"use client";
import { InputFormType, InputNumberType, InputType, Option, RadioOption, TextareaResizeType } from "@interfaces";
import { Input } from "@components";
import { useEffect, useState } from "react";

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
  onChange?: (value: FormItemValue) => void;
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

  const handleOnChange = (value: FormItemValue, item: FormItem) => {
    setFormData((prev) => ({ ...prev, [item.id]: value }));
    if (item.onChange) item.onChange(value);
  };

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
            />
          );
        }
        return null;
      })}
    </div>
  );
};