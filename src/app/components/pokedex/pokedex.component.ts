import { Component, OnInit } from '@angular/core';
import { GetPokemonsService } from 'src/app/services/get-pokemons.service';
import { PokemonInterface } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {


  pokemons: any[] = [];
  constructor(
    private getPokemonsService: GetPokemonsService,
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData: PokemonInterface;

    for (let i = 1; i <= 151; i++) {
      this.getPokemonsService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: `../../../assets/images/${i < 10 ? '00' + i : i < 100 ? '0' + i : i}.png`,
            name: res.name,
            types: res.types
          };
          this.pokemons.push(pokemonData)
        },
      )
    }
  }
}
