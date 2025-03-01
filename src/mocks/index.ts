import { FolderMenuElementType } from "@enums";

export const folderMockData = {
    privateFolders: [
      {
        id: "1",
        label: "Private Folder 1",
        createdAt: "2024-03-01T12:00:00Z",
        updatedAt: "2024-03-01T12:30:00Z",
        createdBy: "user123",
        isCreatedByCurrentUser: true,
        children: [
          {
            id: "1-1",
            label: "Flashcard 1",
            createdAt: "2024-03-01T12:05:00Z",
            updatedAt: "2024-03-01T12:35:00Z",
            type: FolderMenuElementType.Flashcard,
            createdBy: "user123",
            isCreatedByCurrentUser: true,
          },
          {
            id: "1-2",
            label: "Note",
            createdAt: "2024-03-01T12:05:00Z",
            updatedAt: "2024-03-01T12:35:00Z",
            type: FolderMenuElementType.Note,
            createdBy: "user123",
            isCreatedByCurrentUser: true,
          },
          {
            id: "1-3",
            label: "Test Questions",
            createdAt: "2024-03-01T12:05:00Z",
            updatedAt: "2024-03-01T12:35:00Z",
            type: FolderMenuElementType.TestQuestions,
            createdBy: "user123",
            isCreatedByCurrentUser: true,
          },
        ],
      },
      {
        id: "2",
        label: "Private Folder 2",
        createdAt: "2024-03-01T13:00:00Z",
        updatedAt: "2024-03-01T13:30:00Z",
        createdBy: "user456",
        isCreatedByCurrentUser: false,
        children: [
          {
            id: "2-1",
            label: "Note 1",
            createdAt: "2024-03-01T13:05:00Z",
            updatedAt: "2024-03-01T13:35:00Z",
            type: FolderMenuElementType.Note,
            createdBy: "user456",
            isCreatedByCurrentUser: false,
          },
        ],
      },
    ],
    publicFolders: [
      {
        id: "101",
        label: "Public Folder 1",
        createdAt: "2024-03-01T14:00:00Z",
        updatedAt: "2024-03-01T14:30:00Z",
        createdBy: "user789",
        isCreatedByCurrentUser: false,
        children: [
          {
            id: "101-1",
            label: "Test Question 1",
            createdAt: "2024-03-01T14:10:00Z",
            updatedAt: "2024-03-01T14:40:00Z",
            type: FolderMenuElementType.TestQuestions,
            createdBy: "user789",
            isCreatedByCurrentUser: false,
          },
        ],
      },
      {
        id: "102",
        label: "Public Folder 2",
        createdAt: "2024-03-01T15:00:00Z",
        updatedAt: "2024-03-01T15:30:00Z",
        createdBy: "user321",
        isCreatedByCurrentUser: true,
        children: [
          {
            id: "102-1",
            label: "Flashcard 2",
            createdAt: "2024-03-01T15:05:00Z",
            updatedAt: "2024-03-01T15:35:00Z",
            type: FolderMenuElementType.Flashcard,
            createdBy: "user321",
            isCreatedByCurrentUser: true,
          },
          {
            id: "102-1",
            label: "Flashcard 2",
            createdAt: "2024-03-01T15:05:00Z",
            updatedAt: "2024-03-01T15:35:00Z",
            type: FolderMenuElementType.Flashcard,
            createdBy: "user321",
            isCreatedByCurrentUser: true,
          }
        ],
      },
    ],
  };
  
  