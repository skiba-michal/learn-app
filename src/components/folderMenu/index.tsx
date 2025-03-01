import { sortFolderMenuElementsByLabel } from "@utils";
import { PrivateFolderMenuElement, PublicFolderMenuElement } from "./folderMenu.interfaces";
import styles from "./styles.module.scss";
import { useMemo } from "react";

interface FolderMenuProps {
  publicFolders: PublicFolderMenuElement[];
  privateFolders: PrivateFolderMenuElement[];
}

export const FolderMenu = ({ publicFolders, privateFolders }: FolderMenuProps) => {
  const privateFoldersSorted = sortFolderMenuElementsByLabel(privateFolders);
  const publicElements = sortFolderMenuElementsByLabel(publicFolders);

  return (
    <div className={styles.folderMenuWrapper}>
      <div>{/* <button className={styles.button}>New Folder</button> */}</div>
    </div>
  );
};
