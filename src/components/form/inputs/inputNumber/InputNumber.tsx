"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { InputNumberType } from "@interfaces";

export interface InputNumberProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequired?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  type?: InputNumberType;
  onlyPositive?: boolean;
  maxWidth?: string;
  className?: string;
}

export const InputNumber = ({
  label,
  placeholder = "",
  maxLength,
  disabled = false,
  isRequired = false,
  error,
  value = "",
  onChange = () => {},
  onBlur = () => {},
  type = "integer",
  onlyPositive = false,
  maxWidth,
  className = ""
}: InputNumberProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (type === "integer") {
      val = val.replace(/[^0-9-]/g, "");
      val = val.replace(/(?!^)-/g, "");
    } else {
      val = val.replace(/[^0-9.-]/g, "");
      val = val.replace(/(?!^)-/g, "");
      val = val.replace(/(?!^\d+)\./g, "");
    }

    if (onlyPositive) val = val.replace(/-/g, "");

    if (maxLength && val.length > maxLength) val = val.slice(0, maxLength);

    setInputValue(val);
    onChange(val);
  };

  return (
    <div className={`${styles.inputContainer} ${className}`} style={{ maxWidth }}>
      {label && (
        <label className={styles.label}>
          {label} {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type="text"
        className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={isRequired}
        value={inputValue}
        onChange={handleChange}
        onBlur={(e) => onBlur(e.target.value)}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
