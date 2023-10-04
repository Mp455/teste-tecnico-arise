import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Letters from "../../components/Letters/Letters";

type Recipe = {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  strYoutube: string;
};

export default function SearchByLetter() {
  const navigate = useNavigate();
  const [selectedLetter, setSelectedLetter] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipesByLetter() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`
        );
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals);
          setError(null); // Limpar qualquer erro anterior
        } else {
          setRecipes([]);
          setError("Nenhuma receita encontrada.");
        }
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
        setRecipes([]);
        setError("Erro ao buscar receitas. Tente novamente mais tarde.");
      }
    }

    if (selectedLetter) {
      fetchRecipesByLetter();
    } else {
      setRecipes([]);
    }
  }, [selectedLetter]);

  //cria um array que representa o alfabeto de A a Z em letras maiúsculas
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    navigate(`/by-letter/${letter}`);
  };

  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 pb-0">
            <Title>Receitas por Letra</Title>
          </div>
          <div className="flex flex-wrap justify-center gap-3 px-8 mb-6">
            {alphabet.map((letter, index) => (
              <Letters
                key={index}
                letter={letter} // é passado a letra como propriedade 'letter'
                onClick={() => handleLetterClick(letter)}
                isActive={letter === selectedLetter}
              />
            ))}
          </div>

          {error ? (
            <p className="text-center bg-gray p-8">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <Card key={recipe.idMeal} showText={true} receita={recipe} />
                ))
              ) : (
                <div className="col-span-3 flex justify-center items-center">
                  <p className="text-center text-grayText bg-gray p-8">
                    Nenhuma receita encontrada
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
