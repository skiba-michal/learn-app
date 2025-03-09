"use client";
import { PrivateFolderMenuElement, PublicFolderMenuElement } from "@components";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FolderItem } from "../folderItem/folderItem";

interface FolderTreeProps {
  foldersData: PrivateFolderMenuElement[] | PublicFolderMenuElement[];
  collapsedItems: string[];
  onChangeCollapse: (id: string) => void;
}

export const FolderTree = ({ foldersData, collapsedItems, onChangeCollapse }: FolderTreeProps) => {
  return foldersData.map((folder) => {
    return (
      <div key={folder.id} className={styles.folderWrapper}>
        <div className={styles.folderWrapperHeader} onClick={() => onChangeCollapse(folder.id)}>
          <div className={styles.folderIcon}>{collapsedItems.includes(folder.id) ? <FaFolder /> : <FaFolderOpen />}</div>
          <p>{folder.label}</p>
        </div>
        {!collapsedItems.includes(folder.id) &&
          folder.children.map((child) => {
            return <FolderItem key={child.id} folderData={child} />;
          })}
      </div>
    );
  });
};
