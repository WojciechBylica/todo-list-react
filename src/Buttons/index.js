import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className={`buttons__additionalButton ${tasks.some(({ done }) => done) ? "" : "disabled"}`}
                >
                    {tasks.some(({ done }) => done) ? `${hideDoneTasks ? "Pokaż" : "Ukryj"}` : "Ukryj"} ukończone
                </button>

                <button
                    className="buttons__additionalButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
)

export default Buttons;