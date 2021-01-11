import React from 'react';
import { IPokemonSprites } from '../../models/pokemon.interface';
import styles from './LeftScreen.module.scss';

interface ILeftScreenProps {
  isLoaded: boolean;
  // eslint-disable-next-line react/require-default-props
  pokemonSprites?: IPokemonSprites;
}

const buildPreview = (isLoaded: boolean, pokemonSprites: IPokemonSprites) => {
  if (pokemonSprites && Object.entries(pokemonSprites).length) {
    const images = [];
    for (const [key, value] of Object.entries(pokemonSprites)) {
      if (value && typeof value === 'string') {
        images.push(<img key={key} alt="pokemon" src={value} />);
      }
    }
  
    return images;
  }

  return isLoaded ? 'Select a Pokémon or search one' : 'Loading';
};

const LeftScreen: React.FC<ILeftScreenProps> = (props: ILeftScreenProps) => {
  const { isLoaded, pokemonSprites = {} } = props;
  return (
    <div className={styles.LeftScreen__elements} data-testid="LeftScreen">
      <div className={styles.LeftScreen__screen}>
        <div className={styles.LeftScreen__screen_details}>
          {buildPreview(isLoaded, pokemonSprites)}
        </div>
      </div>
    </div>
  );
};

export default LeftScreen;
