import { InputValue } from '@/@types/element';
import { InputHTMLAttributes } from 'react';
import { InternalFieldName, UseFormRegisterReturn } from 'react-hook-form';

export interface InputElemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value: InputValue) => void;
  isError?: boolean;
  libProps?: Partial<UseFormRegisterReturn<InternalFieldName>>;
}
