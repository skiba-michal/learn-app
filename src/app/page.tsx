import { FolderMenu } from "@components";
import styles from "./page.module.scss";
import { folderMockData } from "@mocks";

export default function Home() {
  return (
    <div className={styles.page}>
      <FolderMenu privateFolders={folderMockData.privateFolders} publicFolders={folderMockData.publicFolders} />
    </div>
  );
}
