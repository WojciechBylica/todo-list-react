import { useSelector, useDispatch } from "react-redux";
import {
    selectIsAnyTaskDone,
    selectHideDone,
    selectIsEveryTaskDone,
    selectAreTasksNotEmpty,
    toggleHideDone,
    setAllDone,
} from "../../tasksSlice";
import { ButtonsDiv, ButtonAdditional } from "../Button";

const Buttons = () => {
    const areTasksNotEmpty = useSelector(selectAreTasksNotEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
    const dispatch = useDispatch();

    return (
        <ButtonsDiv>
            {areTasksNotEmpty && (
                <>
                    <ButtonAdditional onClick={() => dispatch(toggleHideDone())}
                        disabled={!isAnyTaskDone}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
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
    );
};

export default Buttons;