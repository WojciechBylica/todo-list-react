import styled from "styled-components";

export const FormElement = styled.form`
    padding: 20px;
    background: white;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #80808040;
    border-radius: 1px;
`;

export const FormButton = styled.button`
    background: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    margin: 0px 0px 0px 15px;
    border: none;
    cursor: pointer;
    transition: 1s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 7px 0px;
    }

    &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
    }   

    &:active {
        filter: brightness(120%);
    }

    
`;