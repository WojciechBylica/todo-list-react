import React, { useState, useRef, useEffect } from "react";
import { FormElement, Input, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("")

  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus()
  };

  useEffect(() => {
    inputRef.current.focus()
  })

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
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton onClick={focusInput}>Dodaj zadanie</FormButton>
    </FormElement>
  );
};

export default Form;