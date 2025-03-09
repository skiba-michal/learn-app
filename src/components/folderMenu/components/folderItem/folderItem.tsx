import { FolderItemIcon, FolderMenuElementChildrenBase, PublicFolderMenuElementChildren } from "@components";
import styles from "./styles.module.scss";

interface FolderItemProps {
  folderData: PublicFolderMenuElementChildren | FolderMenuElementChildrenBase;
}

export const FolderItem = ({ folderData }: FolderItemProps) => {
  // const isPrivateFolderMenuElement = (folderData: PrivateFolderMenuElement | PublicFolderMenuElementChildren): folderData is PrivateFolderMenuElement  =>{
  //   return !(folderData as PublicFolderMenuElement).createdBy;
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <FolderItemIcon folderItemType={folderData.type} />
      </div>
      <p>{folderData.label}</p>
    </div>
  );
};
