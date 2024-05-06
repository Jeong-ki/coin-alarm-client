import { FocusEvent, useMemo, useState } from "react";
import { Input } from "..";
import { InputSearchProps } from "./types";
import { InputValue } from "@/@types/element";
import { Search, X } from "lucide-react";

export const InputSearch = ({
  value,
  setValue,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  libProps,
  ...otherProps
}: InputSearchProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const isShowResetBtn = useMemo(
    () => isFocus && !!value && !otherProps.disabled && !otherProps.readOnly,
    [value, isFocus, otherProps.disabled, otherProps.readOnly]
  );

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocus(true);
    onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    onBlur(e);
    setTimeout(() => {
      setIsFocus(false);
    }, 500);
  };

  const handleChangeInput = (value: InputValue) => {
    onChange?.(String(value));
  };

  const handleClickDelBtn = () => {
    if (setValue) {
      setValue(libProps?.name ?? "", "", { shouldValidate: true });
    }

    onChange?.("");
  };

  return (
    <Input
      value={value}
      onChange={handleChangeInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      libProps={libProps}
      {...otherProps}
    >
      {isShowResetBtn && (
        <button type="button" className="btn_del" onClick={handleClickDelBtn}>
          <X className="del_icon" />
        </button>
      )}
      <Search className="search_icon" />
    </Input>
  );
};
