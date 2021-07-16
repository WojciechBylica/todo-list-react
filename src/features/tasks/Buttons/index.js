import { useSelector, useDispatch } from "react-redux";
import {
    selectIsAnyTaskDone,
    selectHideDone,
    selectIsEveryTaskDone,
    selectAreTasksEmpty,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks
} from "../tasksSlice";
import { ButtonsDiv, ButtonAdditional } from "./styled";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
    const dispatch = useDispatch()
    return (
        <ButtonsDiv>
            <ButtonAdditional onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </ButtonAdditional>
            {areTasksEmpty && (
                <>
                    <ButtonAdditional onClick={() => dispatch(toggleHideDone())}
                        disabled={!isEveryTaskDone}
                    >
                        {isAnyTaskDone ? `${hideDone ? "Pokaż" : "Ukryj"}` : "Ukryj"} ukończone
                    </ButtonAdditional>

                    <ButtonAdditional
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </ButtonAdditional>
                </>
            )}
        </ButtonsDiv>
    )
};

export default Buttons;