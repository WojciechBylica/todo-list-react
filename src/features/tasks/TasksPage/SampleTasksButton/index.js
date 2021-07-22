import { ButtonAdditional, ButtonsDiv } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const SampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <ButtonsDiv>
            <ButtonAdditional
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}>
                {loading
                    ? "ładowanie..."
                    : "Pobierz przykładowe zadania"
                }
            </ButtonAdditional>

        </ButtonsDiv>
    );
};

export default SampleTasksButton;