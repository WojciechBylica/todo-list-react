import { useState, useRef, useEffect } from "react";

export const useForm = () => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus()
    };

    useEffect(() => {
        inputRef.current.focus()
    })

    

    return {
        newTaskContent,
        setNewTaskContent,
        inputRef,
        focusInput,
    };
};