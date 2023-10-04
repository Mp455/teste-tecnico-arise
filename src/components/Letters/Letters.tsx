import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  letter: string;
  isActive: boolean;
  onClick: (letter: string) => void;
};

export default function Letters({ letter, isActive, onClick }: Props) {
  const navigate = useNavigate();

  const handleLetterClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(letter); // Chama a função onClick passada como propriedade

    navigate(`/by-letter/${letter}`);
  };

  return (
    <a
      href={`/by-letter/${letter}`}
      className={`w-2 h-2 flex items-center justify-center hover:text-orangeText hover:scale-150 transition-all ${
        isActive ? "text-orangeText" : ""
      }`}
      onClick={handleLetterClick}
    >
      {letter}
    </a>
  );
}
