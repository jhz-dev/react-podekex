import React from 'react';
import styles from './Pokedex.module.scss';

const Pokedex: React.FC = () => (
  <div className={styles.Pokedex} data-testid="Pokedex">
    <div className={styles.Pokedex__leftPanel}>
      <div className={styles.Pokedex__leftPanel__header_shadow_border} />
      <div className={styles.Pokedex__leftPanel__header_shadow} />
      <div className={styles.Pokedex__leftPanel__header_border} />
      <div className={styles.Pokedex__leftPanel__header} />
      <div className={styles.Pokedex__leftPanel__divider}>
        <div className={styles.hinge} />
        <div className={styles.hinge} />
      </div>
      <div className={styles.Pokedex__leftPanel__elements}>
        <div className={styles.Pokedex__leftPanel__screen}>
          <div className={styles.Pokedex__leftPanel__screen_details} />
        </div>
      </div>
    </div>
    <div className={styles.Pokedex__rightPanel}>asd</div>
  </div>
);

export default Pokedex;
