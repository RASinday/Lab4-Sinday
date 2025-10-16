// src/components/TipCalculator.tsx
'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { CalculatorState, CalculationResult } from '../types/calculator';
import { calculateTip, formatCurrency, validateInput } from '../utils/calculations';
import Input from './Inputs';
import TipSelection from './TipSelection';
import ResultDisplay from './ResultDisplay';

const TipCalculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    billAmount: '',
    tipPercentage: null,
    customTip: '',
    numberOfPeople: '',
  });

  // Memoized calculations (DRY)
  const result = useMemo((): CalculationResult => {
    const bill = parseFloat(state.billAmount) || 0;
    const people = parseFloat(state.numberOfPeople) || 0;
    const tipPercentage = state.tipPercentage || 0;

    return calculateTip(bill, tipPercentage, people);
  }, [state.billAmount, state.tipPercentage, state.numberOfPeople]);

  // Memoized validation (DRY)
  const errors = useMemo(() => ({
    billAmount: validateInput(state.billAmount, false),
    numberOfPeople: validateInput(state.numberOfPeople, false),
  }), [state.billAmount, state.numberOfPeople]);

  // Memoized handlers (SOLID - Single Responsibility)
  const updateState = useCallback((updates: Partial<CalculatorState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const handleReset = useCallback(() => {
    setState({
      billAmount: '',
      tipPercentage: null,
      customTip: '',
      numberOfPeople: '',
    });
  }, []);

  const isResetDisabled = useMemo(() => 
    !state.billAmount && !state.tipPercentage && !state.customTip && !state.numberOfPeople,
    [state]
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-neutral-500 text-2xl md:text-3xl font-bold tracking-widest">
          SPLI
          <br />
          TTER
        </h1>
      </div>

      {/* Calculator Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Input
            header="Bill"
            placeholder="0"
            icon="$"
            value={state.billAmount}
            error={errors.billAmount}
            onChange={(value) => updateState({ billAmount: value })}
          />
          
          <TipSelection
            selectedTip={state.tipPercentage}
            onTipSelect={(tip) => updateState({ tipPercentage: tip })}
            customTip={state.customTip}
            onCustomTipChange={(value) => updateState({ customTip: value })}
          />
          
          <Input
            header="Number of People"
            placeholder="0"
            icon="👤"
            value={state.numberOfPeople}
            error={errors.numberOfPeople}
            onChange={(value) => updateState({ numberOfPeople: value })}
          />
        </div>

        {/* Result Section */}
        <ResultDisplay
          tipAmount={formatCurrency(result.tipPerPerson)}
          totalAmount={formatCurrency(result.totalPerPerson)}
          onReset={handleReset}
          isResetDisabled={isResetDisabled}
        />
      </div>
    </div>
  );
};

export default TipCalculator;