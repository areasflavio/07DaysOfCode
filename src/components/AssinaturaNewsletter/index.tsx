import { FormEvent, useEffect, useRef, useState } from "react";

import mailImg from "../../assets/mail.svg";

import { Container } from "./styles";

export const AssinaturaNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(email.trim() !== "") {
      setIsButtonDisabled(!inputRef.current?.checkValidity());
    }
  }, [email]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert(
      `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${email}`
    );

    setEmail("");
  };

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

      <form onSubmit={handleSubmit}>
        <img src={mailImg} alt="" />

        <input
          ref={inputRef}
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Insira seu e-mail"
        />

        <button disabled={isButtonDisabled} type="submit">Assinar newsletter</button>
      </form>
    </Container>
  );
};
