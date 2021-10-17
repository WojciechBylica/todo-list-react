import { useState, useRef } from 'react';

export const useForm = () => {
  const [newTaskContent, setNewTaskContent] = useState('');

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return {
    newTaskContent,
    setNewTaskContent,
    inputRef,
    focusInput,
  };
};
