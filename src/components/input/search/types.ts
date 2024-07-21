import { UseFormSetValue } from 'react-hook-form';
import { InputProps } from '../types';

export interface InputSearchProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: string | number;
  setValue?: UseFormSetValue<any>;
  onChange?: (value: string | number) => void;
}
