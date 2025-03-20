"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Loader } from "@components";
import { ButtonVariants, LeftRightPosition } from "@interfaces";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  Icon?: React.ReactNode;
  iconPosition?: LeftRightPosition
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  Icon,
  iconPosition = "left",
  isLoading,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ""} ${isLoading ? styles.loading : ""}`}
      onClick={disabled || isLoading ? undefined : onClick}
      disabled={disabled || isLoading}
      type={type}
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
