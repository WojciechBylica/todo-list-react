import React from "react";
import "./style.css";


const Tasks = ({ tasks, hideDone, removeTask }) => {

    return (
        <ul className="tasks">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
                >
                    <button className="tasks__button">
                        {task.done ? "✓" : ""}
                    </button>
                    <div className={`tasks__div${task.done ? " tasks__div--done" : ""}`}>
                        {task.content}
                    </div>
                    <button 
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                    >
                        &#128465;
                </button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;