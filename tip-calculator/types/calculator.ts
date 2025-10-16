export interface CalculatorState {
  billAmount: string;
  tipPercentage: number | null;
  customTip: string;
  numberOfPeople: string;
}

export interface CalculationResult {
  tipPerPerson: number;
  totalPerPerson: number;
  isValid: boolean;
}

export interface InputProps {
  header: string;
  placeholder?: string;
  icon: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

export interface TipButtonProps {
  percentage: number;
  isSelected: boolean;
  onTipSelect: (percentage: number) => void;
}

export interface TipInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isSelected?: boolean;
}

export interface TipSelectionProps {
  selectedTip: number | null;
  onTipSelect: (tip: number | null) => void;
  customTip: string;
  onCustomTipChange: (value: string) => void;
}

export interface ResultDisplayProps {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
  isResetDisabled: boolean;
}

export const TIP_PERCENTAGES = [5, 10, 15, 25, 50] as const;