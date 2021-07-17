import styled from "styled-components";

export const PageSection = styled.section`
     margin: 0 5px 5px;
`;

export const PageSectionDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: ${({ theme }) => theme.color.white};
    margin: 0px 0px 1px 0px;
    padding-right: 15px;
`;

export const PageSectionH2 = styled.h2`
    margin: 0 0 1px;
    padding: 15px;
    background: ${({ theme }) => theme.color.white};
    font-size: 17px;
`;