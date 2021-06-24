import styled from "styled-components";

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:500px) {
        flex-direction: column;
        flex-basis: 100%;
    }
`;

export const ButtonAdditional = styled.button`
    border: none;
    background: white;
    color: teal;
    grid-gap: 20px;
    transition: 1s;
    margin: 10px 0px;
    cursor: pointer;

    &:active {
    color: rgb(7, 197, 197);
    }

    &:hover {
    color: rgb(8, 182, 182);
    }

    &:disabled {
    color: grey;
    cursor: unset;
    }
`;