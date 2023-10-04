import Button from "../Button/Button";
import { Link } from "react-router-dom";

type CardProps = {
  showText?: boolean;
  receita?: {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
    strInstructions?: string;
    strYoutube?: string;
  };
};
//a função countWords é usada para contar o número de palavras nas instruções da receita. Se tiver mais de 22 palavras, será adicionado "..."
function countWords(text: string) {
  return text.split(/\s+/).filter((word) => word !== "").length;
}

export default function Card({ showText = true, receita }: CardProps) {
  const instructions =
    receita && receita.strInstructions
      ? receita.strInstructions.split("\n")
      : [];

  let truncatedInstructions = "";

  if (showText) {
    // Verifica se as instruções têm mais de 22 palavras
    if (countWords(instructions.join(" ")) > 22) {
      const words = instructions.join(" ").split(/\s+/);
      truncatedInstructions = words.slice(0, 22).join(" ") + "...";
    } else {
      truncatedInstructions = instructions.join(" ");
    }
  }

  return (
    <div className="bg-white shadow rounded-xl hover:scale-105 transition-all">
      {receita && (
        <>
          <Link to={`/details/${receita.idMeal}`}>
            <img
              className="rounded-t-xl w-full h-48 object-cover"
              src={receita.strMealThumb}
              alt={receita.strMeal}
            />
          </Link>
          <div className={showText ? "p-3" : "p-3"}>
            <h5 className="font-bold pb-3">{receita.strMeal}</h5>
            {showText && <p className="mb-4">{truncatedInstructions}</p>}
            <div className="flex items-center justify-between">
              <a
                href={receita.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="buttonCard">Youtube</Button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
