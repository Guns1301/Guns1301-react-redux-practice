import React from "react";
import Button from "../Button/Button";
import { CustomForm } from "./Form.styled";

function Form({ children, onSubmit }) {
  return (
    <CustomForm onSubmit={onSubmit}>
      {children}
      <Button text="Сохранить" />
    </CustomForm>
  );
}

export default Form;
