"use client";
import React from "react";
import styles from "./styles.module.scss";
import { RadioOption } from "@interfaces";

export interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  value?: string;
  isRequired?: boolean;
  error?: string;
  onChange?: (value: string) => void;
  maxWidth?: string;
  label?: string;
  disabled?: boolean;
  className?: string;

}

export const RadioButton = ({
  name,
  options,
  value,
  isRequired,
  error,
  onChange = () => {},
  maxWidth,
  label,
  disabled,
  className = "",
}: RadioButtonProps) => {
  return (
    <div className={`${styles.radioButtonWrapper} ${className}`} style={{ maxWidth }}>
      {label && (
        <label className={styles.label}>
          {label} {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.radioGroup}>
        {options.map((option) => (
          <div key={option.value} className={styles.radioOption}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              disabled={disabled}
              className={styles.radioInput}
            />
            <label htmlFor={option.value} className={styles.radioLabel}>
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
