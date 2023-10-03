import classNames from "classnames";

type Props = {
  variant?: "buttonNoBorder" | "buttonWithHover" | "buttonCard";
  children: React.ReactNode;
};

export default function Button({ variant, children }: Props) {
  let bgColor = "";
  if (variant === "buttonNoBorder")
    bgColor =
      "router-link-active router-link-exact-active inline-flex items-center h-full px-5 text-orangeText font-bold ";
  if (variant === "buttonWithHover")
    bgColor =
      "inline-flex items-center px-2 h-full transition-colors hover:bg-orangeText hover:text-white";
  if (variant === "buttonCard")
    bgColor =
      "px-3 py-2 rounded border-2 border-orangeHover bg-orangeText hover:bg-orangeHover text-white transition-colors";

  return <button className={classNames("p-5", bgColor)}>{children}</button>;
}
