"use client";
import { FormGenerator } from "@components";
import "./globals.scss";
import "./grid.scss";
import styles from "./page.module.scss";
import { formGeneratorMock } from "@mocks";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <FormGenerator formItems={formGeneratorMock} />
      </div>
    </div>
  );
};

export default Home;
