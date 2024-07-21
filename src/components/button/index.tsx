import cn from 'classnames';
import { ButtonProps } from './types';

export const Button = ({ children, type, size, color, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={cn('btn', { [`btn_${size}`]: size, [`btn_${color}`]: color })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
