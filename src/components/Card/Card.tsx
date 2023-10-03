import Button from "../Button/Button";

type CardProps = {
  showText?: boolean;
};

export default function Card({ showText = true }: CardProps) {
  return (
    <div className="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <img
        className="rounded-t-xl w-full h-48 object-cover"
        src="/src/images/40333.png"
        alt=""
      />
      <div className={showText ? "p-3" : "p-3"}>
        <h5 className="font-bold">Noteworthy technology acquisitions 2021</h5>
        {showText && (
          <p className="mb-4">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        )}
        <div className="flex items-center justify-between">
          <Button variant="buttonCard">Youtube</Button>
        </div>
      </div>
    </div>
  );
}
