import { ButtonAdditional, ButtonsDiv } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksState } from "../../tasksSlice";

const SampleTasksButton = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasksState)
    console.log(tasks.status)
    return (
        <ButtonsDiv>
            <ButtonAdditional
                disabled={tasks.status === "loading"}
                onClick={() => dispatch(fetchExampleTasks())}>
                {tasks.status === "loading"
                    ? "ładuję..."
                    : "Pobierz przykładowe zadania"
                }
            </ButtonAdditional>

        </ButtonsDiv>
    )

};

export default SampleTasksButton;