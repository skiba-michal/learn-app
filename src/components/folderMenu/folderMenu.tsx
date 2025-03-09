"use client";
import { useState } from "react";
import { sortFolderMenuElementsByLabel } from "@utils";
import { PrivateFolderMenuElement, PublicFolderMenuElement } from "./folderMenu.interfaces";
import styles from "./styles.module.scss";
import { HeaderTextCollapse } from "../headerTextCollapse/headerTextCollapse";
import { FolderTree } from "./components";

interface FolderMenuProps {
  publicFolders: PublicFolderMenuElement[];
  privateFolders: PrivateFolderMenuElement[];
}

export const FolderMenu = ({ publicFolders, privateFolders }: FolderMenuProps) => {
  const [isCollapsedPrivateFolders, setIsCollapsedPrivateFolder] = useState(true);
  const [isCollapsedPublicFolders, setIsCollapsedPublicFolder] = useState(true);
  const [collapsedItems, setCollapsedItems] = useState<string[]>([]);

  const privateFoldersSorted = sortFolderMenuElementsByLabel(privateFolders);
  const publicFoldersSorted = sortFolderMenuElementsByLabel(publicFolders);

  const onClickCollapsePrivate = (isCollapsed: boolean) => {
    setIsCollapsedPrivateFolder(isCollapsed);
  };
  const onClickCollapsePublic = (isCollapsed: boolean) => {
    setIsCollapsedPublicFolder(isCollapsed);
  };

  const onChangeCollapse = (id: string) => {
    if (collapsedItems.includes(id)) {
      setCollapsedItems(collapsedItems.filter((item) => item !== id));
      return;
    }
    setCollapsedItems([...collapsedItems, id]);
  };

  return (
    <div className={styles.folderMenuWrapper}>
      <HeaderTextCollapse label="Prywatne foldery" onToggleCollapse={onClickCollapsePrivate} startCollapsed />

      {!isCollapsedPrivateFolders && (
        <FolderTree foldersData={privateFoldersSorted} onChangeCollapse={onChangeCollapse} collapsedItems={collapsedItems} />
      )}

      <HeaderTextCollapse label="Publiczne foldery" onToggleCollapse={onClickCollapsePublic} startCollapsed />
      {!isCollapsedPublicFolders && (
        <FolderTree foldersData={publicFoldersSorted} onChangeCollapse={onChangeCollapse} collapsedItems={collapsedItems} />
      )}
    </div>
  );
};
