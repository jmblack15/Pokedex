import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PokemonInterface } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(index: number) {
    return this.http.get<PokemonInterface>(`${this.baseUrl}/pokemon/${index}`)
  }
}
