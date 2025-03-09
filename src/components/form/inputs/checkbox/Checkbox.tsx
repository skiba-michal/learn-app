"use client";
import React from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
  error?: string;
  onChange?: (checked: boolean) => void;
  maxWidth?: string;
}

export const Checkbox = ({ label, checked, disabled, isRequired, error, onChange, maxWidth }: CheckboxProps) => {
  return (
    <div className={styles.checkboxWrapper} style={{ maxWidth }}>
      <label className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ""}`}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={checked}
          disabled={disabled}
          required={isRequired}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className={styles.checkboxCustom}></span>
        {label}
      </label>
      
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
