import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../Search/searchQueryParamName";
import { toTask } from "../../../../routes";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >

                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </Button>

                    <Content done={task.done}>
                        <StyledLink as={Link} to={toTask({ id: task.id })}>{task.content}</StyledLink>
                    </Content>

                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        &#128465;
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;