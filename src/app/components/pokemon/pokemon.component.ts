import { Component, OnInit } from '@angular/core';
import { GetPokemonsService } from '../../services/get-pokemons.service'
import { ActivatedRoute} from '@angular/router';
import { PokemonInterface } from 'src/app/models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: PokemonInterface = {
    position: 0,
    image: '',
    name: '',
    weight: 0,
    height: 0,
  }

  pokemonStats: any = [];

  constructor(
    private router: Router,
    private getPokemonService: GetPokemonsService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id'])
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id: any) {
    this.getPokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon.name = res.name;
        this.pokemonStats = res.stats;
        this.pokemon.weight = res.weight;
        this.pokemon.height = res.height;
        this.pokemon.image = `../../../assets/images/${id < 10 ? '00' + id : id < 100 ? '0' + id : id}.png`;
      }
    );
  }

  goPokedex() {
    this.router.navigateByUrl('home')
  }

}
