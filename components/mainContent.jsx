import React, { useEffect, useState } from "react";
import styles from "../styles/MainContent.module.css";
import { Button, Container } from "react-bootstrap";
import Select from "./select";

const MainContent = () => {
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    console.log("selectValue ==> ", selectValue);
  }, [selectValue]);
  const optionsList = [
    { title: "Cup", value: 1 },
    { title: "Bottle", value: 2 },
    { title: "Chair", value: 3 },
  ];
  return (
    <Container>
      <div className={styles.mainWrap}>
        <Select
          label="Table name"
          optionsList={optionsList}
          value={selectValue}
          onChange={setSelectValue}
          placeholder="Select"
        />
      </div>
    </Container>
  );
};

export default MainContent;
