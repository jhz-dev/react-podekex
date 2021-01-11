import React from 'react';
import styles from './Pokedex.module.scss';

const Pokedex: React.FC = () => (
  <div className={styles.Pokedex} data-testid="Pokedex">
    {/* left panel */}
    <div className={styles.Pokedex__leftPanel}>
      {/* left header */}
      <div className={styles.Pokedex__leftPanel__header_shadow_border} />
      <div className={styles.Pokedex__leftPanel__header_shadow} />
      <div className={styles.Pokedex__leftPanel__header_border} />
      <div className={styles.Pokedex__leftPanel__header} />

      {/* vertical hinge/divider */}
      <div className={styles.Pokedex__leftPanel__divider}>
        <div className={styles.hinge} />
        <div className={styles.hinge} />
      </div>

      {/* left screen */}
      <div className={styles.Pokedex__leftPanel__elements}>
        <div className={styles.Pokedex__leftPanel__screen}>
          <div className={styles.Pokedex__leftPanel__screen_details} />
        </div>
      </div>
    </div>

    {/* right panel */}
    <div className={styles.Pokedex__rightPanel}>
      {/* right header */}
      <div className={styles.Pokedex__rightPanel__header_border} />
      <div className={styles.Pokedex__rightPanel__header} />

      <div className={styles.Pokedex__rightPanel__container}>
        {/* right screen */}
        <div className={styles.Pokedex__rightPanel__elements}>
          <div className={styles.Pokedex__rightPanel__screen} />
        </div>

        {/* right buttons */}
        <div className={styles.Pokedex__rightPanel__actions}>
          <div className={styles.button} />
          <div className={styles.button} />
        </div>
      </div>
    </div>
  </div>
);

export default Pokedex;
