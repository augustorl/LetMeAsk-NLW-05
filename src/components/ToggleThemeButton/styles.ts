import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: flex-start;
  font-size: 0.7rem;
  font-weight: lighter;
  background-color: none;
  height: auto;
  position: absolute;
  top: 2vh;
  right: 0;
  left: 93vw;
  bottom: 0;

  p {
    margin-top: 5px;
  }
`