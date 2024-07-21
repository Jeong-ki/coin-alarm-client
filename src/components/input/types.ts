import { FormSize } from '@/@types/element';
import { InputElemProps } from './elem/types';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface InputProps extends InputElemProps {
  formSize?: FormSize;
  errorMsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  successMsg?: string;
}
