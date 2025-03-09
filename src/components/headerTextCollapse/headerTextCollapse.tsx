"use client";
import { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import styles from "./styles.module.scss";

interface HeaderTextCollapseProps {
  label: string;
  onToggleCollapse: (isCollapsed: boolean) => void;
  startCollapsed?: boolean;
}

export const HeaderTextCollapse = ({ label, onToggleCollapse, startCollapsed }: HeaderTextCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(startCollapsed ?? false);
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setIsCollapsed(!isCollapsed);
        onToggleCollapse(!isCollapsed);
      }}
    >
      <div className={styles.icon}>{isCollapsed ? <MdArrowDropDown /> : <MdArrowDropUp />}</div>
      <p>{label}</p>
    </div>
  );
};
