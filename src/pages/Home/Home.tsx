import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <div className="min-h-full h-[100vh]">
      <Header />
      <main className="bg-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0 text-orangeText">
            <Title>Receitas Aleatórias</Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}
