import React from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onChange: (
    value: string
  ) => void | ((event: React.ChangeEvent<HTMLInputElement> | string) => void);
};

export default function Input({ placeholder, onChange }: Props) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    const inputValue = typeof e === "string" ? e : e.target.value;
    if (inputValue !== undefined) {
      onChange(inputValue);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="bg-white border-inputBorder p-2 rounded border-2 w-full"
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}
