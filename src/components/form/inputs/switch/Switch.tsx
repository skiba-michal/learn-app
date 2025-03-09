"use client";
import React from "react";
import styles from "./styles.module.scss";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (checked: boolean) => void;
  maxWidth?: string;
}

export const Switch = ({ checked, disabled, error, onChange, maxWidth }: SwitchProps) => {
  return (
    <div className={styles.switchWrapper} style={{ maxWidth }}>
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
