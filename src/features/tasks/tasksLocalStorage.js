const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
    return localStorage.getItem(localStorageKey)
        ? JSON.parse(localStorage.getItem(localStorageKey))
        : [];
}