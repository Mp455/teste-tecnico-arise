import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState<{
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strTags: string;
    strInstructions: string;
    strYoutube: string;
    strSource: string;
    strIngredients: string[];
    strMeasures: string[];
  } | null>(null);

  useEffect(() => {
    async function fetchFoodDetails() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        const meal = data.meals[0];

        const ingredients = [];
        const measures = [];
        for (let i = 1; i <= 20; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
          const ingredient = meal[ingredientKey];
          const measure = meal[measureKey];

          //Verifica se tanto o ingrediente quanto a medida são válidos
          if (ingredient && measure) {
            ingredients.push(ingredient);
            measures.push(measure);
          }
        }

        setFoodDetails({
          ...meal,
          strIngredients: ingredients,
          strMeasures: measures,
        });
      } catch (error) {
        console.error("Erro ao buscar detalhes da comida:", error);
      }
    }

    fetchFoodDetails();
  }, [id]);

  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[800px] mx-auto p-8">
            {foodDetails && (
              <>
                <Title>{foodDetails.strMeal}</Title>
                <img
                  className="max-w-[100%]"
                  src={foodDetails.strMealThumb}
                  alt={foodDetails.strMeal}
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
                  <div>
                    <strong className="font-bold">Categoria:</strong>
                    {foodDetails.strCategory}
                  </div>
                  <div>
                    <strong className="font-bold">Area:</strong>
                    {foodDetails.strArea}
                  </div>
                  <div>
                    <strong className="font-bold">Tags:</strong>
                    {foodDetails.strTags || "Nenhuma tag disponível"}
                  </div>
                </div>
                <div className="my-3">{foodDetails.strInstructions}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      {" "}
                      Ingredientes
                    </h2>
                    <ul>
                      {foodDetails.strIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Medidas</h2>
                    <ul>
                      {foodDetails.strMeasures.map((measure, index) => (
                        <li key={index}>{measure}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 col-span-1 sm:col-span-2 w-full flex justify-center gap-8">
                    <div className="mr-8">
                      <a href={foodDetails.strYoutube} target="_blank">
                        <Button variant="buttonCard">Youtube</Button>
                      </a>

                      <a
                        target="_blank"
                        className="ml-3 px-3 py-2 text-blue"
                        href={foodDetails.strSource}
                      >
                        Fonte original
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
