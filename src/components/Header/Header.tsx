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
        <Link to="/byName">
          <Button variant="buttonWithHover"> Pesquisar Receita</Button>
        </Link>

        <Button variant="buttonWithHover"> Receitas por Letra</Button>
        <Button variant="buttonWithHover"> Receitas por Igredientes</Button>
      </div>
    </header>
  );
}
