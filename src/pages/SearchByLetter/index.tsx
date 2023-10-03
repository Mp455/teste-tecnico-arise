import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Letters from "../../components/Letters/Letters";
import { Link } from "react-router-dom";

export default function SearchByLetter() {
  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Receitas por Letra</Title>
          </div>
          <div className="flex flex-wrap justify-center gap-3 px-8 mb-6">
            <Letters>A</Letters>
            <Letters>B</Letters>
            <Letters>C</Letters>
            <Letters>D</Letters>
            <Letters>E</Letters>
            <Letters>F</Letters>
            <Letters>G</Letters>
            <Letters>H</Letters>
            <Letters>I</Letters>
            <Letters>J</Letters>
            <Letters>K</Letters>
            <Letters>L</Letters>
            <Letters>M</Letters>
            <Letters>N</Letters>
            <Letters>O</Letters>
            <Letters>P</Letters>
            <Letters>Q</Letters>
            <Letters>R</Letters>
            <Letters>S</Letters>
            <Letters>T</Letters>
            <Letters>U</Letters>
            <Letters>V</Letters>
            <Letters>W</Letters>
            <Letters>X</Letters>
            <Letters>Y</Letters>
            <Letters>Z</Letters>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            <Link to="/details">
              <Card showText={true} />
            </Link>
          </div>
          <div className="flex justify-center text-grayText bg-gray p-8">
            Receitas não encontradas
          </div>
        </div>
      </main>
    </div>
  );
}
