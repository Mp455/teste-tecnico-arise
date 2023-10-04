import { Link } from "react-router-dom";

type Props = {
  strIngredient: string;
};

export default function CardIngredients({ strIngredient }: Props) {
  return (
    <div className="block bg-white rounded p-3 mb-3 shadow">
      <Link to={`/by-ingredient/${strIngredient}`}>
        <h3 className="text-2xl font-bold mb-2">{strIngredient}</h3>
      </Link>
    </div>
  );
}
