import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import CardIngredients from "../../components/CardIngredients/CardIngredients";

import { Link } from "react-router-dom";
export default function Igredients() {
  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Ingredientes</Title>
          </div>
          <div className="px-8">
            <Input placeholder="Pesquisar por ingredientes" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-8">
              <Link to="/by-ingredient">
                <CardIngredients>Potato</CardIngredients>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
