import React, { useContext, useMemo } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const {
    increaseBy,
    counter,
    isMinValueReached,
    isMaxValueReached,
  } = useContext(ProductContext);

  const minValueReachedClass = useMemo(
    () =>
      isMinValueReached
        ? `${styles.buttonDisabled} ${styles.buttonMinusDisabled}`
        : '',
    [isMinValueReached]
  );

  const maxValueReachedClass = useMemo(
    () =>
      isMaxValueReached
        ? `${styles.buttonDisabled} ${styles.buttonAddDisabled}`
        : '',
    [isMaxValueReached]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={`${styles.buttonMinus} ${minValueReachedClass}`}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd} ${maxValueReachedClass}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
