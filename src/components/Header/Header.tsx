import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow h-16 flex justify-between items-stretch">
      <Link to="/">
        {" "}
        <Button variant="buttonNoBorder">Início</Button>
      </Link>

      <div className="flex items-center gap-1">
        <Link to="/by-name">
          <Button variant="buttonWithHover"> Pesquisar Receitas</Button>
        </Link>

        <Link to="/by-letter">
          <Button variant="buttonWithHover"> Receitas por Letra</Button>
        </Link>
        <Link to="/ingredients">
          <Button variant="buttonWithHover"> Receitas por Ingredientes</Button>
        </Link>
      </div>
    </header>
  );
}
