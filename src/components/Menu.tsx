import logoImg from "../assets/logo.svg";

export const Menu = () => {
  return (
    <header className="menu">
      <img src={logoImg} alt="CasaVerde" />

      <ul>
        <li>
          <a href="#">Como fazer</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Depoimentos</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Meu carrinho</a>
        </li>
      </ul>
    </header>
  );
};
