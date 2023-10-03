// Input.tsx
import React from "react";

type Props = {
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function Input({ placeholder, onChange }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="px-8 pb-3">
      <input
        type="text"
        className="bg-white border-inputBorder p-2 rounded border-2 w-full"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}
