"use client";
import { InputFormType, Option, RadioOption } from "@interfaces";
import { Checkbox, DatePicker, Input, InputNumber, RadioButton, Select, Switch, Textarea } from "@components";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FormItem, FormItemValue, FormOnChangeValue, isStringOrBooleanType } from "./formGenerator.interfaces";

interface FormGeneratorProps {
  formItems: FormItem[];
  validationType?: "onBlur" | "onChange" | "onSubmit";
}

// To do 
// wywalic czesc na zewnątrz
// validacja do porzadku
// validacja na onSubmit

const booleanValuesFormTypes: InputFormType[] = ["checkbox", "switch"] as const;
const eventFormTypes: InputFormType[] = ["input", "textarea"] as const;
const stringFromTypes: InputFormType[] = ["datePicker", "inputNumber", "radioButton", "select"] as const;

export const FormGenerator = ({ formItems, validationType = "onSubmit" }: FormGeneratorProps) => {
  const [formData, setFormData] = useState<{ [key: string]: FormItemValue }>({});
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const defaultValues = formItems.reduce((acc: { [key: string]: FormItemValue }, item) => {
      acc[item.id] = item.defaultValue ?? "";
      return acc;
    }, {});
    setFormData(defaultValues);

    const errorsDefault = formItems.reduce((acc: { [key: string]: string }, item) => {
      acc[item.id] = "";
      return acc;
    }, {});
    setFormErrors(errorsDefault);
  }, [formItems]);

  const handleOnChange = (value: FormOnChangeValue, item: FormItem) => {
    const extractedValues = getValue(value, item.inputFormType);
    const typeValue = isStringOrBoolean(extractedValues, item);

    if (validationType === "onChange") handleValidation(extractedValues, item);

    setFormData((prev) => ({ ...prev, [item.id]: extractedValues }));
    if (!item.handleChange) return;

    if (typeValue === "boolean" && typeof extractedValues === "boolean") {
      item.handleChange(extractedValues as never, item);
      return;
    }

    if (typeValue === "string" && typeof extractedValues === "string") item.handleChange(extractedValues as never, item);
  };

  const isStringOrBoolean = (value: FormItemValue, item: FormItem): isStringOrBooleanType => {
    const isEventType = item.inputFormType === "input" || item.inputFormType === "textarea";
    const isStringFormType =
      item.inputFormType === "datePicker" ||
      item.inputFormType === "inputNumber" ||
      item.inputFormType === "radioButton" ||
      item.inputFormType === "select";
    const isBooleanType = item.inputFormType === "checkbox" || item.inputFormType === "switch";

    if (isBooleanType && typeof value === "boolean") return "boolean";
    if ((isEventType || isStringFormType) && typeof value === "string") return "string";
    return null;
  };

  const handleValidation = (value: FormItemValue, item: FormItem) => {
    if (!item.customValidation) return;
    const typeValue = isStringOrBoolean(value, item);

    if (typeValue === "boolean" && typeof value === "boolean") {
      const validationMessage = item.customValidation(value as never);
      setFormErrors((prev) => ({ ...prev, [item.id]: validationMessage }));
      return;
    }
    if (typeValue === "string" && typeof value === "string") {
      const validationMessage = item.customValidation(value as never);
      setFormErrors((prev) => ({ ...prev, [item.id]: validationMessage }));
      return;
    }
  };

  const handleValidationOnBlur = (value: FormItemValue, item: FormItem) => {
    if (validationType !== "onBlur") return;
    handleValidation(value, item);
  };

  const getValue = (value: FormOnChangeValue, type: InputFormType): FormItemValue => {
    if (booleanValuesFormTypes.includes(type)) return value as boolean;
    if (eventFormTypes.includes(type)) return (value as ChangeEvent<HTMLInputElement>).target.value;
    if (stringFromTypes.includes(type)) return value as string;
    return null;
  };

  return (
    <form>
      <div>
        {formItems.map((item) => {
          const commonProps = {
            label: item.label,
            disabled: item.disabled,
            isRequired: item.isRequired,
            maxWidth: item.maxWidth,
            className: item.className,
            error: formErrors[item.id],
            onChange: (value: FormOnChangeValue) => handleOnChange(value, item),
            onBlur: (value: string) => handleValidationOnBlur(value, item),
          };

          if (item.inputFormType === "checkbox") {
            return <Checkbox {...commonProps} key={item.id} checked={!!formData[item.id] as boolean} />;
          }
          if (item.inputFormType === "datePicker") {
            return (
              <DatePicker
                {...commonProps}
                key={item.id}
                value={(formData[item.id] as string) || ""}
                minDate={item.minDate}
                maxDate={item.maxDate}
              />
            );
          }
          if (item.inputFormType === "input") {
            return (
              <Input
                {...commonProps}
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                maxLength={item.maxLength}
                value={(formData[item.id] as string) || ""}
              />
            );
          }
          if (item.inputFormType === "inputNumber") {
            return (
              <InputNumber
                {...commonProps}
                key={item.id}
                placeholder={item.placeholder}
                value={(formData[item.id] as string) || ""}
                type={item.type}
                onlyPositive={item.onlyPositive}
              />
            );
          }
          if (item.inputFormType === "radioButton") {
            return (
              <RadioButton
                {...commonProps}
                key={item.id}
                value={(formData[item.id] as string) || ""}
                options={item.options as RadioOption[]}
                name={item.name || item.id}
              />
            );
          }
          if (item.inputFormType === "select") {
            return <Select {...commonProps} key={item.id} value={(formData[item.id] as string) || ""} options={item.options as Option[]} />;
          }
          if (item.inputFormType === "switch") {
            return <Switch {...commonProps} key={item.id} checked={!!formData[item.id] as boolean} />;
          }
          if (item.inputFormType === "textarea") {
            return (
              <Textarea
                {...commonProps}
                key={item.id}
                placeholder={item.placeholder}
                maxLength={item.maxLength}
                value={(formData[item.id] as string) || ""}
                rows={item.rows}
                resize={item.resize}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={styles.footer}>{/* <Button></Button> */}</div>
    </form>
  );
};
