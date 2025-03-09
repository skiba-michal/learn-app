import { FolderMenuElementType } from "@enums";
import { RxIdCard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { RiQuestionnaireFill } from "react-icons/ri";

interface FolderItemIconProps {
  folderItemType: FolderMenuElementType;
}

export const FolderItemIcon = ({ folderItemType }: FolderItemIconProps) => {
  if (folderItemType === FolderMenuElementType.Flashcard) return <RxIdCard />;
  if (folderItemType === FolderMenuElementType.Note) return <CgNotes />;
  if (folderItemType === FolderMenuElementType.TestQuestions) return <RiQuestionnaireFill />;
};
