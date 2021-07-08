import { FormElement, Input, FormButton } from "./styled";
import { useForm } from "./useForm";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";

const Form = () => {
  const {
    newTaskContent,
    setNewTaskContent,
    inputRef,
    focusInput,
  } = useForm()

  const dispatch = useDispatch();

  const onFormSubmit = (event,) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent) {

      dispatch(addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      }));

      setNewTaskContent("");
    };
  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <Input
        autoFocus
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