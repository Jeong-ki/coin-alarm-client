import cn from 'classnames';
import { InputElem } from './elem';
import { PropsWithChildren } from 'react';
import { InputProps } from './types';

export const Input = ({
  children,
  formSize,
  errorMsg,
  // isError,
  successMsg,
  ...otherProps
}: PropsWithChildren<InputProps>) => {
  return (
    <div className={cn('item_form', { [`form_${formSize}`]: formSize })}>
      <div className="box_tf">
        <div className="inner_tf">
          <InputElem isError={!!errorMsg} {...otherProps} />
          {children}
        </div>
      </div>
      {errorMsg && <p className="txt_error">{String(errorMsg)}</p>}
      {successMsg && <p className="txt_success">{successMsg}</p>}
    </div>
  );
};
