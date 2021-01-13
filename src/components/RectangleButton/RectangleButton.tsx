import React from 'react';
import styles from './RectangleButton.module.scss';

export interface IRectangleButtonProps {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

const RectangleButton: React.FC<IRectangleButtonProps> = ({
  text,
  onClick,
  disabled
}: IRectangleButtonProps) => (
  <button
    type="button"
    className={styles.RectangleButton}
    data-testid="RectangleButton"
    disabled={disabled}
    onClick={() => {
      onClick();
    }}
  >
    <span>{text}</span>
  </button>
);

export default RectangleButton;
