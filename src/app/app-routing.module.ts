import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'new', component: NewMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }