interface States{
  baseState: number,
  name: string,
}

interface Type {
  name: ''
}

export interface PokemonInterface {
  position: number,
  image: string,
  name: string,
  types?: Type[]
  states?: States[]
}
