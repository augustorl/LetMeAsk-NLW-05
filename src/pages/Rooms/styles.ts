import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray150};

    .content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      
      @media(max-width: 520px) {
        justify-content: center;
      }

      > img {
        max-height: 45px;

        @media(max-width: 520px) {
          display: none;
        }
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    @media(max-width: 800px) {
      max-width: 85vw;
    }

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.textColor};
      }

      span {
        margin-left: 16px;
        background: ${({ theme }) => theme.colors.pink};
        border-radius: 9999px;
        padding: 8px 16px;
        color: ${({ theme }) => theme.colors.textColor};
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.white100};
        box-shadow: 0 2px 12px ${({ theme }) => theme.colors.shadow};
        color: ${({ theme }) => theme.colors.textColor};
        resize: vertical;
        min-height: 130px;
        resize: none;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

        @media(max-width: 520px) {

          button {
            margin-top: 15px;
            width: 42%;
            font-size: 12px;
            padding: 10px;
          }
        }

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${({ theme }) => theme.colors.black};
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.gray100};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${({ theme }) => theme.colors.purple};
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }

`;