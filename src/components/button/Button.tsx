"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Loader } from "@components";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
  Icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  Icon,
  iconPosition = "left",
  isLoading,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ""} ${isLoading ? styles.loading : ""}`}
      onClick={disabled || isLoading ? undefined : onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <div className="center">
          <Loader size="tiny" color="primaryText" />
        </div>
      )}
      {iconPosition === "left" && Icon && !isLoading && <div className="center">{Icon}</div>}
      {children}
      {iconPosition === "right" && Icon && <div className="center">{Icon}</div>}
    </button>
  );
};
