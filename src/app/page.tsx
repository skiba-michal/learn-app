"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import { Button, Modal, RadioButton, Select } from "@components";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    setError(value ? "" : "Wybór jest wymagany");
  };

  const options = [
    { label: "Opcja 1", value: "option1" },
    { label: "Opcja 2", value: "option2" },
    { label: "Opcja 3", value: "option3" },
  ];
  return (
    <div className={styles.page}>
      layour
      <Button variant="primary" onClick={() => setOpen(true)}>open</Button>
      <Button variant="secondary"  onClick={() => setOpen(true)}>open</Button>
      <Button variant="primary" disabled  onClick={() => setOpen(true)}>open</Button>
      <Button variant="secondary" disabled  onClick={() => setOpen(true)}>open</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>test</Modal>

      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        error={error}
        label="Wybierz opcję"
        isRequired
        maxWidth="300px"
      />
    </div>
  );
};

export default Home;
