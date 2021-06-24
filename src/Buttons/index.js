import React from "react";
import { ButtonsDiv, ButtonAdditional } from "./syled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <ButtonsDiv>
        {tasks.length > 0 && (
            <>
                <ButtonAdditional onClick={toggleHideDone}
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
);

export default Buttons;