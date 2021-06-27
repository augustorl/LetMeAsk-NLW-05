import styled from "styled-components";

export const Container = styled.div`
    .room-code {
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    @media(max-width: 520px) {
      max-width: 200px;
    }
  
    background: ${({ theme }) => theme.colors.white50};
    border: 1px solid ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  
    display: flex;
  
    div {
      background: ${({ theme }) => theme.colors.purple};
      padding: 0 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  
    span {
      display: block;
      align-self: center;
      flex: 1;
      padding: 0 16px 0 12px;
      width: 230px;
      font-size: 14px;
      font-weight: 500;

      @media(max-width: 520px) {
        padding: 0 8px 0 4px;
      }
    }
  } 
`;