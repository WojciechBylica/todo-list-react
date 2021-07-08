import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { ButtonsDiv, ButtonAdditional } from "./syled";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()
    return (
        <ButtonsDiv>
            {tasks.length > 0 && (
                <>
                    <ButtonAdditional onClick={() => dispatch(toggleHideDone())}
                        disabled={tasks.every(({ done }) => !done)}
                    >
                        {tasks.some(({ done }) => done) ? `${hideDone ? "Pokaż" : "Ukryj"}` : "Ukryj"} ukończone
                    </ButtonAdditional>

                    <ButtonAdditional
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </ButtonAdditional>
                </>
            )}
        </ButtonsDiv>
    )
};

export default Buttons;