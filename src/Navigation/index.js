import { toAuthor, toTasks } from "../routes";
import { StyledItem, StyledList, StyledNav, StyledNavLink } from "./styled";


const Navigation = () => (
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
);

export default Navigation;