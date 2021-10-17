import styled from 'styled-components';

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const ButtonAdditional = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.teal};
  grid-gap: 20px;
  transition: 1s;
  margin: 10px 0px;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.grey};
    cursor: unset;
  }
`;
