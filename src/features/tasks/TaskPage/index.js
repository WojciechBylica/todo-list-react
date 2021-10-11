import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    const styles ={margin: "12px"}
    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <div style={styles}
                className="fb-share-button"
                data-href="https://wojciechbylica.github.io/todo-list-react#/zadania/wKALyiV8WJIsR-KHsuzCP"
                data-layout="box_count"
                data-size="large"
            >
                <a
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwojciechbylica.github.io%2Ftodo-list-react%2F&amp;src=sdkpreparse" 
                    className="fb-xfbml-parse-ignore">
                    Udostępnij</a></div>
            <Section
                title={task ? task.content : "Nie znaleziono zadania😟"}
                body={!!task && (
                    <>
                        <Wrapper>
                            <strong>Ukończono:</strong> {task.done ? "tak" : "nie"}
                        </Wrapper>
                    </>
                )}
            />
        </Container>
    );
};

export default TaskPage;