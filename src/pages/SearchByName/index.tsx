import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";

export default function SearchByName() {
  return (
    <div className="min-h-full h-[100vh] bg-gray">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Pesquisar refeições por Nome</Title>
          </div>
          <Input placeholder="Pesquisar por receita" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            <Card />
          </div>
          <div className="flex justify-center text-grayText bg-gray p-8">
            {" "}
            Receitas não encontradas{" "}
          </div>
        </div>
      </main>
    </div>
  );
}
