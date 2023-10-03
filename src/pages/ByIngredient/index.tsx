import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

export default function ByIngredient() {
  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Receitas com </Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            <Link to="/details">
              <Card showText={false} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
