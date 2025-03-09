"use client";
import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  label?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequired?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxWidth?: string;
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
}: InputProps) => {
  return (
    <div className={styles.inputContainer} style={{ maxWidth }}>
      {label && <label className={styles.label}>{label} {isRequired && <span className={styles.required}>*</span>}</label>}
      <input
        type={type}
        className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
