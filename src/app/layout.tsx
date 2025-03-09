import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { FolderMenu, Header } from "@components";
import { folderMockData } from "@mocks";
import styles from "./layout.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn app",
  description: "App to learn new things",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} ${styles.bodyWrapper}`}>
      <FolderMenu privateFolders={folderMockData.privateFolders} publicFolders={folderMockData.publicFolders} />
      <div className={styles.pageWrapper}>
        <Header />
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
