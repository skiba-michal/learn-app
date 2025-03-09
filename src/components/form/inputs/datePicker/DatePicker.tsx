"use client";
import React from "react";
import styles from "./styles.module.scss";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  maxWidth?: string;
  minDate?: string;
  maxDate?: string;
  label?: string;
  isRequired?: boolean;
}

export const DatePicker = ({ value, onChange, disabled, error, maxWidth, minDate, maxDate, label, isRequired }: DatePickerProps) => (
  <div className={styles.datePickerWrapper} style={{ maxWidth }}>
    {label && <label className={styles.label}>{label} {isRequired && <span className={styles.required}>*</span>}</label>}
    <input
      type="date"
      className={styles.datePicker}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      min={minDate}
      max={maxDate}
    />
    {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
);
