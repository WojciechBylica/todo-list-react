import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px 0px;
    margin: 0px;
    background: white;
`;

export const Item = styled.li`
    display: flex;
    margin: 0px 15px;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #80808040;
    word-break: break-word;

   ${({ hidden }) => hidden && css`
        display: none;
   `}
`;

export const Content = styled.span`
    padding: 0px 10px;
    flex-grow: 1;
    color: #565555;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};

    &:hover{
        filter: brightness(120%);
    }
`;

export const Button = styled.button`
    background: green;
    border: none;
    width: 27px;
    height: 27px;
    padding: 5px;
    color: white;
    flex-shrink: 0;
    cursor: pointer;
    transition: 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background : ${({ theme }) => theme.color.green};

        &:hover {
            filter: brightness(110%);
    }       

        &:active {
            filter: brightness(120%);
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.red};
   
    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
    `} 
`;