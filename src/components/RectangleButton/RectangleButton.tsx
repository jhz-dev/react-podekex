import React from 'react';
import styles from './RectangleButton.module.scss';

export interface IRectangleButtonProps {
  text: string;
  onClick: () => void;
}

const RectangleButton: React.FC<IRectangleButtonProps> = ({
  text,
  onClick,
}: IRectangleButtonProps) => (
  <button
    type="button"
    className={styles.RectangleButton}
    data-testid="RectangleButton"
    onClick={() => {
      onClick();
    }}
  >
    <span>{text}</span>
  </button>
);

export default RectangleButton;
