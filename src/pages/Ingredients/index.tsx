import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import CardIngredients from "../../components/CardIngredients/CardIngredients";

type Ingredient = {
  strIngredient: string;
};

type ApiResponse = {
  meals: Ingredient[];
};

export default function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );
        const data: ApiResponse = await response.json();

        // Verifica se os resultados existem e têm a estrutura correta
        if (data.meals) {
          setIngredients(data.meals);
        } else {
          console.log("Nenhum ingrediente encontrado na API.");
          setIngredients([]);
        }
      } catch (error) {
        console.error("Erro ao buscar ingredientes:", error);
      }
    }

    fetchIngredients();
  }, []);

  // Função para lidar com a mudança no valor de pesquisa
  const handleSearchChange = (value: string) => {
    setSearchInput(value);
  };

  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Ingredientes</Title>
          </div>
          <div className="px-8">
            <Input
              placeholder="Pesquisar por ingredientes"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ingredients &&
                ingredients
                  .filter((ingredient) =>
                    ingredient.strIngredient
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                  .map((ingredient, index) => (
                    <CardIngredients
                      key={index}
                      strIngredient={ingredient.strIngredient}
                    />
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
