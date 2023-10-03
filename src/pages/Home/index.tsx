import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

import { useState, useEffect } from "react";

export default function Home() {
  const [receita, setReceita] = useState({
    strMealThumb: "",
    strMeal: "",
    strInstructions: "",
    strYoutube: "",
  });

  useEffect(() => {
    async function fetchReceitaAleatoria() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        setReceita(data.meals[0]);
      } catch (error) {
        console.error("Erro ao buscar a receita:", error);
      }
    }

    fetchReceitaAleatoria();
  }, []);
  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Receitas Aleatórias</Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            <Card showText={true} receita={receita} />
          </div>
        </div>
      </main>
    </div>
  );
}
