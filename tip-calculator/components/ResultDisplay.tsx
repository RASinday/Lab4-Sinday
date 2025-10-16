import React from 'react';
import { ResultDisplayProps } from '../types/calculator';

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  tipAmount,
  totalAmount,
  onReset,
  isResetDisabled,
}) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full">
      <div className="space-y-6 mb-6 md:mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold">Tip Amount</h3>
            <p className="text-neutral-400 text-sm">/ person</p>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-primary-400">
            {tipAmount}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold">Total</h3>
            <p className="text-neutral-400 text-sm">/ person</p>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-primary-400">
            {totalAmount}
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        disabled={isResetDisabled}
        className={`w-full py-3 text-xl font-bold rounded-lg transition-colors ${
          isResetDisabled
            ? 'bg-neutral-400 text-neutral-900 cursor-not-allowed'
            : 'bg-primary-400 text-neutral-900 hover:bg-neutral-200'
        }`}
      >
        RESET
      </button>
    </div>
  );
};

export default ResultDisplay;