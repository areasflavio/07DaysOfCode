import mailImg from "../../assets/mail.svg";

import { Container } from "./styles";

export const AssinaturaNewsletter = () => {
  return (
    <Container>
      <span>Sua casa com as</span>
      <h2>
        melhores
        <br />
        plantas
      </h2>
      <p>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </p>

      <form>
        <img src={mailImg} alt="" />

        <input name="email" type="email" placeholder="Insira seu e-mail" />

        <button type="submit">Assinar newsletter</button>
      </form>
    </Container>
  );
};
