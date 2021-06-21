import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone}
                    className="buttons__additionalButton"
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {tasks.some(({ done }) => done) ? `${hideDone ? "Pokaż" : "Ukryj"}` : "Ukryj"} ukończone
                </button>

                <button
                    onClick={setAllDone}
                    className="buttons__additionalButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;