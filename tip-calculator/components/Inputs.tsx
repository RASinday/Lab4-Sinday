import React from 'react';
import { InputProps } from '../types/calculator';

const Input: React.FC<InputProps> = ({
  header,
  placeholder = "0",
  icon,
  value,
  error,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9.]/g, '');
    onChange(newValue);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-neutral-500 text-sm font-bold">
          {header}
        </label>
        {error && <span className="text-red-500 text-sm font-bold">{error}</span>}
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
          {icon}
        </span>
        <input
          type="text"
          inputMode="decimal"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`w-full bg-neutral-50 text-neutral-900 text-right text-2xl font-bold p-3 rounded-lg border-2 focus:outline-none pl-10 ${
            error ? 'border-red-500' : 'border-transparent focus:border-primary-400'
          }`}
        />
      </div>
    </div>
  );
};

export default Input;