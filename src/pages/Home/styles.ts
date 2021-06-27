import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
      flex: 7;
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white50};
  
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      padding: 120px 80px;

      @media(max-width: 800px) {
        display: none;
      }
  
      img {
        max-width: 320px;
      }
  
      strong {
        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
      }
  
      p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 12px;
        color: ${({ theme }) => theme.colors.white100};
      }
    }
  
    main {
      flex: 8;
  
      padding: 0 32px;
  
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background:  ${({ theme }) => theme.colors.red};
    color:  ${({ theme }) => theme.colors.white50};
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    cursor: pointer;
    border: 0;
  
    transition: filter 0.2s;
  
    img {
      margin-right: 8px;
    }
  
    &:hover {
      filter: brightness(0.9)
    }
  }
  
  .separator {
    font-size: 14px;
    color:  ${({ theme }) => theme.colors.gray50};
  
    margin: 32px 0;
    display: flex;
    align-items: center;
  
    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background:  ${({ theme }) => theme.colors.gray50};
      margin-right: 16px;
    }
  
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.gray50};
      margin-left: 16px;
    }
`;

export const Content = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;
  
      > img {
        align-self: center;
      }
  
      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
      }
  
      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background:${({ theme }) => theme.colors.white50};
          border: 1px solid ${({ theme }) => theme.colors.gray50};
        }
  
        button {
          margin-top: 16px;
        }
  
        button, input {
          width: 100%;
        }
      }
  
      p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray100};
        margin-top: 16px;
  
        a {
          color:${({ theme }) => theme.colors.pink};
        }
      }
`