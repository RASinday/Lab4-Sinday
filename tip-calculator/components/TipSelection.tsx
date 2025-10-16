import React from 'react';
import { TipSelectionProps, TIP_PERCENTAGES } from '../types/calculator';
import TipButton from './TipButton';
import TipInput from './TipInput';

const TipSelection: React.FC<TipSelectionProps> = ({
  selectedTip,
  onTipSelect,
  customTip,
  onCustomTipChange,
}) => {
  const handleTipSelect = (tip: number) => {
    onTipSelect(tip);
    onCustomTipChange('');
  };

  const handleCustomTipChange = (value: string) => {
    onCustomTipChange(value);
    onTipSelect(value ? Number(value) : null);
  };

  const isCustomSelected = selectedTip !== null && 
    !TIP_PERCENTAGES.includes(selectedTip as any);

  return (
    <div className="mb-6">
      <label className="block text-neutral-500 text-sm font-bold mb-3">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {TIP_PERCENTAGES.map((percentage) => (
          <TipButton
            key={percentage}
            percentage={percentage}
            isSelected={selectedTip === percentage}
            onTipSelect={handleTipSelect}
          />
        ))}
        <TipInput
          value={customTip}
          onChange={handleCustomTipChange}
          isSelected={isCustomSelected}
        />
      </div>
    </div>
  );
};

export default TipSelection;