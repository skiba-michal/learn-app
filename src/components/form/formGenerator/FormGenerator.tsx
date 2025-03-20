"use client";
import { Option, RadioOption, ValidationType } from "@interfaces";
import { Button, Checkbox, DatePicker, Input, InputNumber, RadioButton, Select, Switch, Textarea } from "@components";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  CancelButtonProps,
  FormGeneratorData,
  FormGeneratorErrors,
  FormItem,
  FormItemValue,
  FormOnChangeValue,
  SaveButtonProps,
} from "./formGenerator.interfaces";
import { getValue, handleValidationInput, handleValidationInputNumber } from "./formGenerator.utils";

interface FormGeneratorProps {
  formItems: FormItem[];
  validationType?: ValidationType;
  onSubmit?: (data: FormGeneratorData) => void;
  isSubmitProcessing?: boolean;
  disableFields?: boolean;
  disableSubmit?: boolean;
  saveButton?: SaveButtonProps;
  cancelButton?: CancelButtonProps;
}

export const FormGenerator = ({
  formItems,
  validationType = "onSubmit",
  onSubmit = () => {},
  isSubmitProcessing,
  disableFields,
  disableSubmit,
  saveButton,
  cancelButton,
}: FormGeneratorProps) => {
  const [formData, setFormData] = useState<FormGeneratorData>({});
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isFormHasFirstSubmit, setIsFormHasFirstSubmit] = useState(false);

  useEffect(() => {
    const defaultValues = formItems.reduce((acc: FormGeneratorData, item) => {
      acc[item.id] = item.defaultValue ?? "";
      return acc;
    }, {});
    setFormData(defaultValues);

    const errorsDefault = formItems.reduce((acc: FormGeneratorErrors, item) => {
      acc[item.id] = "";
      return acc;
    }, {});
    setFormErrors(errorsDefault);
  }, [formItems]);

  const handleOnChange = (value: FormOnChangeValue, item: FormItem) => {
    const extractedValues = getValue(value, item.inputFormType);

    if (validationType === "onChange" || validationType === "all") handleValidation(extractedValues, item);

    setFormData((prev) => ({ ...prev, [item.id]: extractedValues }));
    if (!item.handleChange) return;

    item.handleChange(extractedValues as never, item);
  };

  const handleValidation = (value: FormItemValue, item: FormItem) => {
    console.log(value)
    if (item.isRequired && !value) {
      setFormErrors((prev) => ({ ...prev, [item.id]: "Pole jest wymagane" }));
      return;
    }
    if (item.validation?.customValidation) {
      const validationMessage = item.validation.customValidation(value as never, item.id, formData);
      if (validationMessage) {
        setFormErrors((prev) => ({ ...prev, [item.id]: validationMessage }));
        return;
      }
    }

    if (item.inputFormType === "input") {
      const validationMessage = handleValidationInput(value as never, item);
      if (validationMessage) {
        setFormErrors((prev) => ({ ...prev, [item.id]: validationMessage }));
        return;
      }
    }

    if (item.inputFormType === "inputNumber" || item.inputFormType === "textarea") {
      const validationMessage = handleValidationInputNumber(value as never, item);
      if (validationMessage) {
        setFormErrors((prev) => ({ ...prev, [item.id]: validationMessage }));
        return;
      }
    }
    setFormErrors((prev) => ({ ...prev, [item.id]: "" }));
  };

  const handleValidationOnBlur = (value: FormItemValue, item: FormItem) => {
    if (validationType !== "onBlur" && !isFormHasFirstSubmit) return;
    handleValidation(value, item);
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((error) => !error);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFormHasFirstSubmit(true);
    if (validationType === "onSubmit" || validationType === "all") {
      formItems.forEach((item) => handleValidation(formData[item.id], item));
      console.log(formErrors);
    }
    const isValid = isFormValid();
    if (isValid) onSubmit(formData);
  };

  return (
    <form className="container">
      {formItems.map((item) => {
        const commonProps = {
          label: item.label,
          disabled: item.disabled || disableFields,
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

      <div className={`${styles.footer} col-12`}>
        <div>
          {cancelButton && (
            <Button
              variant={cancelButton.variant || "secondary"}
              onClick={cancelButton.onClick}
              Icon={cancelButton.Icon}
              iconPosition={cancelButton.iconPosition}
            >
              {cancelButton.text}
            </Button>
          )}
        </div>
        <div>
          <Button
            onClick={handleSubmit}
            isLoading={isSubmitProcessing}
            variant={saveButton?.variant || "primary"}
            iconPosition={saveButton?.iconPosition}
            disabled={disableSubmit || isSubmitProcessing}
            type="submit"
          >
            {saveButton?.text || "Zapisz"}
          </Button>
        </div>
      </div>
    </form>
  );
};
