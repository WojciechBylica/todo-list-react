import React, { useState } from "react";
import { FormElement, Input, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent) {
      addNewTask(trimmedNewTaskContent);
      setNewTaskContent("");
    };

  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </FormElement>
  );
};

export default Form;