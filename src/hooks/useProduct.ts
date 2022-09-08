import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const isMinValueReached = useMemo<boolean>(() => {
    return counter === 0;
  }, [counter]);

  const isMaxValueReached = useMemo<boolean>(() => {
    return initialValues?.maxCount ? counter === initialValues.maxCount : false;
  }, [counter, initialValues]);

  const increaseBy = useCallback(
    (value: number) => {
      let newValue = 0;

      if (initialValues?.maxCount) {
        newValue =
          counter + value <= initialValues?.maxCount
            ? Math.max(counter + value, 0)
            : Math.max(initialValues?.maxCount, 0);
      } else {
        newValue = Math.max(counter + value, 0);
      }

      setCounter(newValue);

      onChange && onChange({ count: newValue, product });
    },
    [counter, setCounter, onChange, initialValues?.maxCount, product]
  );

  const reset = useCallback(() => {
    setCounter(initialValues?.count || value);
  }, [setCounter]);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMinValueReached,
    isMaxValueReached,
    increaseBy,
    reset,
  };
};
