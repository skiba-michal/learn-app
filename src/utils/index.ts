import { PrivateFolderMenuElement, PublicFolderMenuElement } from "@components";

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const sortFolderMenuElementsByLabel = (folderMenuElements: PrivateFolderMenuElement[] | PublicFolderMenuElement[]) => {
  if (!folderMenuElements) return [];
  return folderMenuElements
    .map((folder) => ({
      ...folder,
      children: [...folder.children].sort((a, b) => a.label.localeCompare(b.label)),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
};
