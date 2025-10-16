import React from 'react';
import { TipInputProps } from '../types/calculator';

const TipInput: React.FC<TipInputProps> = ({
  value,
  onChange,
  placeholder = "Custom",
  isSelected = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    onChange(newValue);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`bg-neutral-50 text-neutral-900 text-xl font-bold text-center rounded-lg border-2 focus:outline-none p-3 ${
        isSelected ? 'border-primary-400' : 'border-transparent focus:border-primary-400'
      }`}
    />
  );
};

export default TipInput;