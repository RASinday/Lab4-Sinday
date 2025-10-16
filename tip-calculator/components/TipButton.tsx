import React from 'react';
import { TipButtonProps } from '../types/calculator';

const TipButton: React.FC<TipButtonProps> = ({
  percentage,
  isSelected,
  onTipSelect,
}) => {
  return (
    <button
      onClick={() => onTipSelect(percentage)}
      className={`p-3 text-xl font-bold rounded-lg transition-colors ${
        isSelected
          ? 'bg-primary-400 text-neutral-900'
          : 'bg-neutral-900 text-white hover:bg-neutral-200 hover:text-neutral-900'
      }`}
    >
      {percentage}%
    </button>
  );
};

export default TipButton;