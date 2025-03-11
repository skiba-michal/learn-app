"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Option } from "@interfaces";

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  isRequired?: boolean;
  error?: string;
  maxWidth?: string;
  disabled?: boolean;
  className?: string;
}

export const Select = ({ options, value, onChange, label, isRequired, error, maxWidth, disabled, className = "" }: SelectProps) => (
  <div className={`${styles.selectWrapper} ${className}`} style={{ maxWidth }}>
    {label && (
      <label className={styles.label}>
        {label} {isRequired && <span className={styles.required}>*</span>}
      </label>
    )}

    <select value={value} onChange={(e) => onChange(e.target.value)} className={styles.selectInput} disabled={disabled}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
);
