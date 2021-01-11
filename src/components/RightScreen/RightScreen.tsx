import React from 'react';
import { IPokemon, IPokemonDetails } from '../../models/pokemon.interface';
import styles from './RightScreen.module.scss';

interface IRightScreenProps {
  pokemons: IPokemon[];
  // eslint-disable-next-line react/require-default-props
  pokemon?: IPokemonDetails;
  onItemClick: (url: string) => void;
}

const buildList = (pokemons: IPokemon[], onItemClick: (url: string) => void) =>
  pokemons.map((item: IPokemon, index: number) => (
    <button
      className={styles.RightScreen__item}
      type="button"
      key={item.name}
      onClick={() => onItemClick(item.url)}
    >
      {item.name}
    </button>
  ));

const buildDetailsView = (pokemon: IPokemonDetails) => (
  <div className={styles.RightScreen__items}>
    <span className={styles.RightScreen__item_details}>
      <b>name:</b> {pokemon.name}
    </span>
    <span className={styles.RightScreen__item_details}>
      <b>id:</b> {pokemon.id}
    </span>
    <span className={styles.RightScreen__item_details}>
      <b>height:</b> {pokemon.height}
    </span>
    <span className={styles.RightScreen__item_details}>
      <b>weight:</b> {pokemon.weight}
    </span>
    <span className={styles.RightScreen__item_details}>
      <b>types: </b>
      {pokemon.types?.map(({ type }) => `${type.name},`)}
    </span>
    <span className={styles.RightScreen__item_details}>
      <b>moves: </b>
    </span>
    <div className={styles.RightScreen__item_details__moves}>
      {pokemon.moves?.map(({ move }) => (
        <span key={move.name}>{move.name}</span>
      ))}
    </div>
  </div>
);

const RightScreen: React.FC<IRightScreenProps> = (props: IRightScreenProps) => {
  const { pokemons, onItemClick, pokemon = {} } = props;
  return (
    <div className={styles.RightScreen} data-testid="RightScreen">
      {Object.entries(pokemon).length > 0
        ? buildDetailsView(pokemon)
        : buildList(pokemons, onItemClick)}
    </div>
  );
};

export default RightScreen;
