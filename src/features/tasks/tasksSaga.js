import { throttle, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    console.log("Zaczynam pracę")
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    };
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    yield throttle(2_000, fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}