import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

type Recipe = {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strInstructions?: string;
  strYoutube?: string;
};

export default function ByIngredient() {
  const { ingredient } = useParams();
  console.log(ingredient);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipesByIngredient() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();

        console.log(data);

        if (data.meals) {
          setRecipes(data.meals);
        }
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    }

    fetchRecipesByIngredient();
  }, [ingredient]);

  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Receitas com {ingredient}</Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            {recipes.map((recipe) => (
              <Card key={recipe.idMeal} receita={recipe} showText={false} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
