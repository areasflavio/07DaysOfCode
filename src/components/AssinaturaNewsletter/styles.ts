import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 150px;
  max-width: 50%;

  span {
    font-size: 22px;
    color: #202020;
    opacity: 0.5;
  }

  h2 {
    font-family: "Elsie Swash Caps";
    font-weight: 900;
    font-size: 82px;
    line-height: 94px;

    color: #202020;

    margin-top: 12px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #202020;
    opacity: 0.5;

    margin-top: 24px;
    max-width: 480px;
  }

  form {
    display: grid;
    grid-template-columns: auto 1fr auto;

    align-items: center;
    margin-top: 36px;

    height: 72px;
    width: 100%;
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    img {
      margin: 0 16px;
    }

    input {
      height: 100%;

      font-size: 16px;
      line-height: 20px;

      color: #202020;

      opacity: 0.3;
    }

    button {
      background: #ffcb47;
      height: 100%;

      font-size: 16px;
      line-height: 20px;

      display: flex;
      align-items: center;
      text-align: center;

      padding: 0 24px;

      color: #ffffff;
    }
  }
`;

