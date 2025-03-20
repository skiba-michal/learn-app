"use client";
import React from "react";
import styles from "./styles.module.scss";

export interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  maxWidth?: string;
  minDate?: string;
  maxDate?: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
}

export const DatePicker = ({
  value,
  onChange = () => {},
  onBlur = () => {},
  disabled,
  error,
  maxWidth,
  minDate,
  maxDate,
  label,
  isRequired,
  className = "",
}: DatePickerProps) => (
  <div className={`${styles.datePickerWrapper} ${className}`} style={{ maxWidth }}>
    {label && (
      <label className={styles.label}>
        {label} {isRequired && <span className={styles.required}>*</span>}
      </label>
    )}
    <input
      type="date"
      className={styles.datePicker}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
      disabled={disabled}
      min={minDate}
      max={maxDate}
    />
    {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
);
