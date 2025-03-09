"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface MenuItem {
  label: string;
  onClick: () => void;
};

interface PopupMenuProps {
  menu: MenuItem[];
  children: ReactNode;
};

export const PopupMenu: React.FC<PopupMenuProps> = ({ menu, children }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div
      onContextMenu={handleContextMenu}
      className={styles.popupMenuWrapper}
    >
      {children}
      {visible && (
        <div
          ref={menuRef}
          className={styles.popupMenu}
          style={{ top: position.y, left: position.x }}
        >
          {menu.map((item, index) => (
            <div
              key={index}
              className={styles.popupMenuItem}
              onClick={() => {
                item.onClick();
                setVisible(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

