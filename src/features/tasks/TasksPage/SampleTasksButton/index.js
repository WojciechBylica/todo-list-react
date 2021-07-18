import { ButtonAdditional, ButtonsDiv } from "../styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

const SampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <ButtonsDiv>
            <ButtonAdditional onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </ButtonAdditional>
        </ButtonsDiv>
    )

};

export default SampleTasksButton;