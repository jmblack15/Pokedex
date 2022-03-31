export interface PokemonInterface {
  position: number,
  image: string,
  name: string,
  types?: object[]
  stats?: object[],
  weight?: number,
  height?: number,
}
