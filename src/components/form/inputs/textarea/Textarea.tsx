"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { TextareaResizeType } from "@interfaces";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequired?: boolean;
  error?: string;
  value?: string;
  rows?: number;
  resize?: TextareaResizeType
  onChange?: (value: string) => void;
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
  onChange,
  maxWidth,
  className = "",
}: TextareaProps) => {
  const [text, setText] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value;

    if (maxLength && val.length > maxLength) val = val.slice(0, maxLength);

    setText(val);
    onChange?.(val);
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
        value={text}
        onChange={handleChange}
      />
      {maxLength && (
        <div className={styles.charCounter}>
          {text.length}/{maxLength}
        </div>
      )}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
