"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Button } from "@components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalTitle?: string;
  textPrimarySave?: string;
  textSecondaryButton?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  textPrimarySave = "Zapisz",
  textSecondaryButton,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {modalTitle && <p className={styles.title}>{modalTitle}</p>}
        <div className={styles.modalContent}>{children}</div>
        <div className={styles.footer}>
          <div>
            {textSecondaryButton && (
              <Button variant="secondary" onClick={onClose}>
                {textSecondaryButton}
              </Button>
            )}
          </div>

          <Button>{textPrimarySave}</Button>
        </div>
      </div>
    </div>
  );
};
