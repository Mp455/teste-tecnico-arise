type Props = {
  children: React.ReactNode;
};

export default function Letters({ children }: Props) {
  return (
    <a
      href=""
      className="w-2 h-2 flex items-center justify-center hover:text-orangeText hover:scale-150 transition-all"
    >
      {children}
    </a>
  );
}
