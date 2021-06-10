import React from "react";
import "./style.css";


const Tasks = ({ tasks, HideDone }) => {

    return (
        <ul className="tasks">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className={`tasks__item${task.done && HideDone ? " tasks__item--hidden" : ""}`}
                >
                    <button className="tasks__button">
                        {task.done ? "✓" : ""}
                    </button>
                    <div className={`tasks__div${task.done ? " tasks__div--done" : ""}`}>
                        {task.content}
                    </div>
                    <button className="tasks__button tasks__button--remove">
                        &#128465;
                </button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;