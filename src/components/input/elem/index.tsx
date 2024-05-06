"use client";

import { ChangeEvent, FocusEvent } from "react";
import { InputElemProps } from "./types";
import cn from "classnames";

export const InputElem = ({
  isError,
  autoComplete = "off",
  onBlur = () => {},
  onChange = () => {},
  libProps = {},
  ...otherProps
}: InputElemProps) => {
  const {
    onBlur: onBlurLib = () => {},
    onChange: onChangeLib = () => {},
    ...otherLibProps
  } = libProps;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: targetValue },
    } = e;
    onChange(targetValue);
    onChangeLib(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    onBlur(e);
    onBlurLib(e);
  };

  return (
    <input
      className={cn("tf_comm", {
        error: isError,
      })}
      placeholder="입력해 주세요."
      autoComplete={autoComplete}
      onBlur={handleBlur}
      {...otherProps}
      {...otherLibProps}
      onChange={handleChange}
    />
  );
};
