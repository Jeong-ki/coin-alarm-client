import { useEffect, RefObject } from 'react';

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
}

const useOutsideClick = ({ ref, isFocus, setIsFocus }: UseOutsideClickProps) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocus(false);
      }
    }

    if (isFocus) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isFocus, setIsFocus]);
};

export default useOutsideClick;
