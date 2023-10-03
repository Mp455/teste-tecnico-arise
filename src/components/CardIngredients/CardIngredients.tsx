type Props = {
  children: React.ReactNode;
};

export default function CardIngredients({ children }: Props) {
  return (
    <div className="block bg-white rounded p-3 mb-3 shadow">
      <h3 className="text-2xl font-bold mb-2">{children}</h3>
    </div>
  );
}
