"use client";
import React from "react";
import styles from "./styles.module.scss";
import { TextareaResizeType } from "@interfaces";

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequired?: boolean;
  error?: string;
  value?: string;
  rows?: number;
  resize?: TextareaResizeType;
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string) => void;
  maxWidth?: string;
  className?: string;
}

export const Textarea = ({
  label,
  placeholder = "",
  maxLength,
  disabled = false,
  isRequired = false,
  error,
  value = "",
  rows = 4,
  resize = "vertical",
  onChange = () => {},
  onBlur = () => {},
  maxWidth,
  className = "",
}: TextareaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value;

    if (maxLength && val.length > maxLength) val = val.slice(0, maxLength);

    onChange(e);
  };

  return (
    <div className={`${styles.textareaContainer} ${className}`} style={{ maxWidth }}>
      {label && (
        <label className={styles.label}>
          {label} {<span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        className={`${styles.textarea} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={isRequired}
        rows={rows}
        style={{ resize }}
        value={value}
        onChange={handleChange}
        onBlur={(e) => onBlur(e.target.value)}
      />
      {maxLength && (
        <div className={styles.charCounter}>
          {value.length}/{maxLength}
        </div>
      )}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
