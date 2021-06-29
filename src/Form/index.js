import { FormElement, Input, FormButton } from "./styled";
import { useForm } from "./useForm";

const Form = ({ addNewTask }) => {

  const {
    newTaskContent,
    setNewTaskContent,
    inputRef,
    focusInput,
  } = useForm()

  const onFormSubmit = (event,) => {
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