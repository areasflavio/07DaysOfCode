import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 150px;
  max-width: 50%;

  @media(max-width: 980px) {
    max-width: 100%;
  }

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

    @media(max-width: 840px) {
      max-width: 100%;
    }
  
  }

  form {
    display: grid;
    grid-template-areas: "mail input btn";
    grid-template-columns: auto 1fr auto;

    align-items: center;
    margin-top: 36px;

    height: 72px;
    width: 100%;
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    @media(max-width: 580px) {
      grid-template-areas: 
        "mail input"
        "btn  btn";
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr 1fr;
    }

    img {
      grid-area: mail;
      margin: 0 16px;
    }

    input {
      grid-area: input;
      height: 100%;

      font-size: 16px;
      line-height: 20px;

      color: #202020;

      opacity: 0.3;
    }

    button {
      grid-area: btn;
      background: #ffcb47;
      height: 100%;

      font-size: 16px;
      line-height: 20px;
      text-align: center;

      padding: 0 24px;
      color: #ffffff;
    }
  }
`;

