// src/utils/calculations.ts
import { CalculationResult } from '../types/calculator';

export const calculateTip = (
  billAmount: number,
  tipPercentage: number,
  numberOfPeople: number
): CalculationResult => {
  if (billAmount <= 0 || numberOfPeople <= 0 || tipPercentage <= 0) {
    return { tipPerPerson: 0, totalPerPerson: 0, isValid: false };
  }

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  
  const tipPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = totalAmount / numberOfPeople;

  return {
    tipPerPerson: Math.round(tipPerPerson * 100) / 100,
    totalPerPerson: Math.round(totalPerPerson * 100) / 100,
    isValid: true
  };
};

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

export const validateInput = (value: string, allowZero: boolean = false): string => {
  if (!value) return "Can't be empty";
  if (parseFloat(value) === 0 && !allowZero) return "Can't be zero";
  return "";
};