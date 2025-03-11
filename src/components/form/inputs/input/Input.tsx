"use client";
import React from "react";
import styles from "./styles.module.scss";
import { InputType } from "@interfaces";

interface InputProps {
  label?: string;
  type?: InputType;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequired?: boolean;
  error?: string;
  value?: string;
  onChange: (e: string) => void;
  maxWidth?: string;
  className?: string;
}

export const Input = ({
  label,
  type = "text",
  placeholder = "Wpisz coś...",
  maxLength,
  disabled = false,
  isRequired = false,
  error,
  value,
  onChange,
  maxWidth,
  className = "",
}: InputProps) => {
  return (
    <div className={`${styles.inputContainer} ${className}`} style={{ maxWidth }}>
      {label && (
        <label className={styles.label}>
          {label} {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={isRequired}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
