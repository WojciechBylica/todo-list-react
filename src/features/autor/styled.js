import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    background: ${({ theme }) => theme.color.white};
    text-align: justify;
    display:flex;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        text-align: left;
    }
`;

export const Image = styled.img`
    height: 202px;
    width: 250px;
    border-radius: 50px;
    margin: 0 10px;
`;