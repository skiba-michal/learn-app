"use client";
import { useState } from "react";
import "./globals.scss";
import "./grid.scss";
import styles from "./page.module.scss";
import { FormGenerator } from "@components";
import { formGeneratorMock } from "@mocks";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className="row">
          <div className="col-3 ">Kolumna 1</div>
          <div className="col-6 ">Kolumna 1</div>
          <div className="col-12 ">Kolumna 2</div>
          <div className="col-12 ">Kolumna 3</div>
        </div>
      </div>
      <FormGenerator formItems={formGeneratorMock} />
    </div>
  );
};

export default Home;
