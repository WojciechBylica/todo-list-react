import { ButtonAdditional, ButtonsDiv } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading, selectTasksState } from "../../tasksSlice";

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