import { PrivateFolderMenuElement, PublicFolderMenuElement } from "@components";

export const sortFolderMenuElementsByLabel = (folderMenuElements: PrivateFolderMenuElement[] | PublicFolderMenuElement[]) => {
  if (!folderMenuElements) return [];
  return folderMenuElements
    .map((folder) => ({
      ...folder,
      children: [...folder.children].sort((a, b) => a.label.localeCompare(b.label)),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
};
