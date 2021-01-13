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
  previous: string;
  next: string;
  search: boolean;
};

class Pokedex extends React.Component<PokedexProps, PokedexState> {
  constructor(props: PokedexProps) {
    super(props);
    this.state = {
      isLoaded: false,
      pokemons: [],
      pokemon: {},
      previous: '',
      next: '',
      search: false,
    };
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons(
    url: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  ) {
    this.resetState();

    fetch(url)
      .then((response) => response.json())
      .then(
        ({ results, next, previous }) => {
          this.setState({
            isLoaded: true,
            pokemon: {},
            pokemons: results,
            next,
            previous,
          });
        },
        (error) => {
          this.resetState();
        }
      );
  }

  getPokemon = (url: string) => {
    this.resetState();

    fetch(url)
      .then((response) => response.json())
      .then(
        ({ height, weight, id, name, sprites, types, moves }) => {
          this.setState({
            isLoaded: true,
            pokemon: { height, weight, id, name, sprites, types, moves },
            previous: '',
            next: '',
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

  onNext = () => {
    const { next } = this.state;

    if (next) {
      this.getPokemons(next);
    }
  };

  onPrevious = () => {
    const { previous } = this.state;

    if (previous) {
      this.getPokemons(previous);
    }
  };

  onSearch = () => {
    const { search } = this.state;
    this.setState({ search: !search });
  };

  resetState = () => {
    this.setState({
      isLoaded: false,
      pokemons: [],
      pokemon: {},
      previous: '',
      next: '',
      search: false,
    });
  };

  searchPokemon = (text: string) => {
    if (text) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
        .then((response) => response.json())
        .then(
          ({ results, next, previous }) => {
            const data = results.filter(({ name }: { name: string }) =>
              name.includes(text)
            );

            this.setState({
              isLoaded: true,
              pokemon: {},
              pokemons: data,
              next,
              previous,
            });
          },
          () => {}
        );
    }
  };

  render() {
    const { isLoaded, pokemons, pokemon, search, previous, next } = this.state;

    return (
      <div className={styles.Pokedex} data-testid="Pokedex">
        {/* left panel */}
        <div className={styles.Pokedex__leftPanel}>
          {/* left header */}
          <div className={styles.Pokedex__leftPanel__header_shadow_border} />
          <div className={styles.Pokedex__leftPanel__header_shadow} />
          <div className={styles.Pokedex__leftPanel__header_border} />
          <div className={styles.Pokedex__leftPanel__header} />

          {/* left icons */}
          <div className={styles.Pokedex__leftPanel__icons}>
            <div className={styles.big_blue_circle} />
            <div className={styles.circle__red} />
            <div className={styles.circle__yellow} />
            <div className={styles.circle__green} />
          </div>

          {/* vertical hinge/divider */}
          <div className={styles.Pokedex__leftPanel__divider}>
            <div className={styles.hinge} />
            <div className={styles.hinge} />
          </div>

          <LeftScreen isLoaded={isLoaded} pokemonSprites={pokemon.sprites} />

          <div className={styles.Pokedex__rightPanel__actions}>
            <RectangleButton
              disabled={!isLoaded}
              text="cancel"
              onClick={this.onCancel}
            />
            <RectangleButton
              disabled={!isLoaded}
              text="search"
              onClick={this.onSearch}
            />
          </div>
        </div>

        {/* right panel */}
        <div className={styles.Pokedex__rightPanel}>
          {/* right header */}
          <div className={styles.Pokedex__rightPanel__header_border} />
          <div className={styles.Pokedex__rightPanel__header} />

          <div className={styles.Pokedex__rightPanel__container}>
            {/* right screen */}
            <RightScreen
              isLoaded={isLoaded}
              pokemons={pokemons}
              pokemon={pokemon}
              activateSearch={search}
              onItemClick={this.getPokemon}
              onTextChange={this.searchPokemon}
            />

            {/* right buttons */}
            <div className={styles.Pokedex__rightPanel__actions}>
              <RectangleButton
                disabled={!isLoaded || !previous}
                text="previous"
                onClick={this.onPrevious}
              />
              <RectangleButton
                disabled={!isLoaded || !next}
                text="next"
                onClick={this.onNext}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
