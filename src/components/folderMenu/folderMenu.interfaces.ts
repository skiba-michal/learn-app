import { FolderMenuElementType } from "@enums";

export interface FolderMenuElementBase {
  id: string;
  label: string;
  createdAt: string;
  updatedAt?: string;
  equivalentId?: string;
}
export interface FolderMenuElementChildrenBase extends FolderMenuElementBase {
  type: FolderMenuElementType;
}

export interface PublicFolderMenuElement extends FolderMenuElementBase {
  children: PublicFolderMenuElementChildren[];
  createdBy: string;
  isCreatedByCurrentUser: boolean;
}

export interface PublicFolderMenuElementChildren extends FolderMenuElementChildrenBase {
  createdBy: string;
  isCreatedByCurrentUser: boolean;
}

export interface PrivateFolderMenuElement extends FolderMenuElementBase {
  children: FolderMenuElementChildrenBase[];
}