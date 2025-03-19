"use client";
import React from "react";
import styles from "./styles.module.scss";

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (checked: boolean) => void;
  maxWidth?: string;
  className?: string;
  isRequired?: boolean;
}

export const Switch = ({ label, checked, disabled, error, onChange, maxWidth, className = "", isRequired }: SwitchProps) => {
  return (
    <div className={`${styles.switchWrapper} ${className}`} style={{ maxWidth }}>
      {label && (
        <label className={styles.label}>
          {label} {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <label className={`${styles.switchLabel} ${disabled ? styles.disabled : ""}`}>
        <input
          type="checkbox"
          className={styles.switchInput}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className={styles.switchSlider}></span>
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
