import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/autor/AuthorPage";
import { StyledItem, StyledList, StyledNav, StyledNavLink } from "./styled";
import { toAuthor, toTask, toTasks } from "./route";

export default () => (
    <HashRouter>
        <StyledNav>
            <StyledList>
                <StyledItem>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </StyledItem>
                <StyledItem>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </StyledItem>
            </StyledList>
        </StyledNav>
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>

    </HashRouter>
);