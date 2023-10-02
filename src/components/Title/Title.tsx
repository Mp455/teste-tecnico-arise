type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return (
    <h1 className="text-4xl font-bold mb-4 text-orangeText">{children}</h1>
  );
}
