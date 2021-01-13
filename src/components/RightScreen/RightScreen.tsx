import React, { useCallback } from 'react';
import * as _ from 'lodash';
import { IPokemon, IPokemonDetails } from '../../models/pokemon.interface';
import styles from './RightScreen.module.scss';

interface IRightScreenProps {
  activateSearch: boolean;
  isLoaded: boolean;
  onTextChange: (text: string) => void;
  onItemClick: (url: string) => void;
  // eslint-disable-next-line react/require-default-props
  pokemon?: IPokemonDetails;
  pokemons: IPokemon[];
}

const getValue = (value: number = 0, type: 'height' | 'weight' = 'height') => {
  let data = '0';
  if (value) {
    data = `${value / 10}`;
  }

  data += type === 'height' ? 'mt' : 'kg';

  return data;
};

const buildList = (
  pokemons: IPokemon[],
  isLoaded: boolean,
  onItemClick: (url: string) => void
) =>
  pokemons.map((item: IPokemon) => (
    <button
      className={styles.RightScreen__item}
      type="button"
      key={item.name}
      disabled={!isLoaded}
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
      <b>height:</b> {getValue(pokemon.height)}
    </span>
    <span className={styles.RightScreen__item_details}>
      <b>weight:</b> {getValue(pokemon.weight, 'weight')}
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(
    _.debounce((q: string) => onTextChange(q), 500),
    []
  );

  const {
    pokemons,
    onItemClick,
    pokemon = {},
    isLoaded,
    activateSearch,
    onTextChange,
  } = props;
  return (
    <div className={styles.RightScreen} data-testid="RightScreen">
      {activateSearch && (
        <input onChange={(e) => delayedQuery(e.target.value)} />
      )}
      {Object.entries(pokemon).length > 0
        ? buildDetailsView(pokemon)
        : buildList(pokemons, isLoaded, onItemClick)}
    </div>
  );
};

export default RightScreen;
