import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/autor/AuthorPage";
import { StyledItem, StyledList, StyledNav, StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <StyledNav>
            <StyledList>
                <StyledItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledItem>
                <StyledItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </StyledItem>
            </StyledList>
        </StyledNav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>

    </HashRouter>
);