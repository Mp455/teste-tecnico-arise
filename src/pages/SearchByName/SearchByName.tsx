import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
export default function SearchByName() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto">
        <Title>Pesquisar refeições por nome</Title>
        <input
          className="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
          type="text"
          name="search"
          placeholder="Pesquisar refeição"
        ></input>
      </main>
    </>
  );
}
