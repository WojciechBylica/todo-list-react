import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./taskLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: tasksId }) => {
            const index = tasks.findIndex(({ id }) => id === tasksId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: () => { },
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsAnyTaskDone = state => selectTasks(state).some(({ done }) => done);
export default tasksSlice.reducer;