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

export default function Card({ showText = true, receita }: CardProps) {
  const RESUME = 1;
  const instructions =
    receita && receita.strInstructions
      ? receita.strInstructions.split("\n")
      : [];

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
            <h5 className="font-bold">{receita.strMeal}</h5>
            {showText && (
              <p className="mb-4">
                {instructions.slice(0, RESUME).join("\n\n")}
              </p>
            )}
            <div className="flex items-center justify-between">
              <a href={receita.strYoutube} target="_blank">
                <Button variant="buttonCard">Youtube</Button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
