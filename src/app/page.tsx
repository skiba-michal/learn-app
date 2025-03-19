"use client";
import { useState } from "react";
import "./globals.scss";
import "./grid.scss";
import styles from "./page.module.scss";
import { Button, FormGenerator, Loader } from "@components";
import { formGeneratorMock } from "@mocks";
import { RxIdCard } from "react-icons/rx";
const Home = () => {
  return (
    <div className={styles.page}>
      <Button variant="primary" onClick={() => {}}>Text</Button>
      <Loader  />
      <FormGenerator formItems={formGeneratorMock} />
    </div>
  );
};

export default Home;
