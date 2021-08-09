import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";


export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;
    }
`;

export const StyledNav = styled.nav`
    background: ${({ theme }) => theme.color.teal};
`;

export const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 15px;
    list-style-type: none;
`;

export const StyledItem = styled.li`
    margin: 0 10px;
`;