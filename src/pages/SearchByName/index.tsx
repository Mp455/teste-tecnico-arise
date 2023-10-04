import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";

import { useState, useEffect } from "react";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type ApiResponse = {
  meals: Recipe[] | null;
};

export default function SearchByName() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Recipe[] | null>(null);

  const handleSearchChange = (value: string) => {
    console.log("Valor de pesquisa:", value);
    setSearchValue(value);
  };

  useEffect(() => {
    async function searchRecipesByName() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        );
        const data: ApiResponse = await response.json();

        // Verifica se os resultados existem e têm a estrutura correta
        if (data.meals) {
          setSearchResults(data.meals);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    }

    // Verifica se há um valor de pesquisa antes de chamar a função de busca
    if (searchValue) {
      searchRecipesByName();
    } else {
      // Se não houver um valor de pesquisa, redefina os resultados para null
      setSearchResults(null);
    }
  }, [searchValue]);

  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Pesquisar Refeições por Nome</Title>
          </div>
          <div className="px-8 pb-3">
            <Input
              placeholder="Pesquisar por receita"
              onChange={handleSearchChange}
            />
          </div>

          {searchResults === null && (
            <p className="text-center text-grayText bg-gray p-8">
              Pesquise por receitas digitando um nome
            </p>
          )}
          {searchResults !== null && searchResults.length === 0 && (
            <p className="text-center text-grayText bg-gray p-8">
              Receitas não encontradas
            </p>
          )}
          {searchResults !== null && searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
              {searchResults.map((recipe) => (
                <Card key={recipe.idMeal} showText={true} receita={recipe} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
