import React from 'react';
import { IPokemon, IPokemonDetails } from '../../models/pokemon.interface';
import LeftScreen from '../LeftScreen/LeftScreen';
import RectangleButton from '../RectangleButton/RectangleButton';
import RightScreen from '../RightScreen/RightScreen';
import styles from './Pokedex.module.scss';

type PokedexProps = {};
type PokedexState = {
  isLoaded: boolean;
  pokemons: IPokemon[];
  pokemon: IPokemonDetails;
};

class Pokedex extends React.Component<PokedexProps, PokedexState> {
  constructor(props: PokedexProps) {
    super(props);
    this.state = {
      isLoaded: true,
      pokemons: [],
      pokemon: {}
    };
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    this.setState({
      isLoaded: false,
    });

    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then((response) => response.json())
      .then(
        ({ results, next, previous }) => {
          this.setState({
            isLoaded: true,
            pokemon: {},
            pokemons: results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            pokemon: {},
            pokemons: [],
          });
        }
      );
  }

  getPokemon = (url: string) => {
    this.setState({
      isLoaded: false,
    });

    fetch(url)
      .then((response) => response.json())
      .then(
        ({ height, weight, id, name, sprites, types, moves }) => {
          this.setState({
            isLoaded: true,
            pokemon: { height, weight, id, name, sprites, types, moves }
          });
        },
        (error) => {
          this.setState({
            pokemon: {},
            isLoaded: false,
          });
        }
      );

  };

  onCancel = () => {
    this.getPokemons();
  };

  onSearchClicked = () => {};

  render() {
    const { isLoaded, pokemons, pokemon } = this.state;

    return (
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

          <LeftScreen isLoaded={isLoaded} pokemonSprites={pokemon.sprites} />
        </div>

        {/* right panel */}
        <div className={styles.Pokedex__rightPanel}>
          {/* right header */}
          <div className={styles.Pokedex__rightPanel__header_border} />
          <div className={styles.Pokedex__rightPanel__header} />

          <div className={styles.Pokedex__rightPanel__container}>
            {/* right screen */}
            <RightScreen
              pokemons={pokemons}
              pokemon={pokemon}
              onItemClick={this.getPokemon}
            />

            {/* right buttons */}
            <div className={styles.Pokedex__rightPanel__actions}>
              <RectangleButton text="cancel" onClick={this.onCancel} />
              <RectangleButton text="search" onClick={this.onSearchClicked} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
