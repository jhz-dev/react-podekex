export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonSprites {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
}

export interface IPokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface IPokemonDetails {
  height?: number;
  id?: number;
  name?: string;
  sprites?: IPokemonSprites;
  types?: IPokemonType[];
  weight?: number;
  moves?: IPokemonMove[];
}
