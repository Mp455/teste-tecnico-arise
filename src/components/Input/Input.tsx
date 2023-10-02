type InputProps = {
  placeholder?: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <div className="px-8 pb-3">
      <input
        type="text"
        className=" bg-white border-inputBorder p-2 rounded border-2 w-full"
        placeholder={placeholder}
      />
    </div>
  );
}
