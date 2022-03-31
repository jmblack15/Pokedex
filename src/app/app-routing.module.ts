import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'home', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
