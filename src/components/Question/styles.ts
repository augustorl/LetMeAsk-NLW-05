import styled from "styled-components";


export const QuestionContainer = styled.div`
    background: ${({ theme }) => theme.colors.white100};
    border-radius: 8px;
    box-shadow: 0 2px 12px${({ theme }) => theme.colors.shadow};
    padding: 24px;
  
    & + .question {
      margin-top: 8px;
    }

    &.highlighted {
      background: ${({ theme }) => theme.colors.white150};
      border: 1px solid ${({ theme }) => theme.colors.purple};
  
      footer .user-info span {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  
    &.answered {
      background: ${({ theme }) => theme.colors.gray200};
    }
    
    p {
      color: ${({ theme }) => theme.colors.black};
    }
  
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
  
      .user-info {
        display: flex;
        align-items: center;
        
        > div {
          display: flex;
          gap: 16px;
        }
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
  
        span {
          margin-left: 8px;
          color: ${({ theme }) => theme.colors.gray100};
          font-size: 14px;
        }
      }
  
      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2;
  
        &.like-button {
          display: flex;
          align-items: flex-end;
          color: ${({ theme }) => theme.colors.gray100};
          gap: 8px;
  
          &.liked {
            color: ${({ theme }) => theme.colors.purple};
            svg path {
              stroke:  ${({ theme }) => theme.colors.purple};
            }
          }
        }
  
        &:hover {
          filter: brightness(0.7)
        }
      }
    }
`;