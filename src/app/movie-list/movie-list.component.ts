import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie'; 

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  moviesList!: Movie[];
  displayedColumns: string[] = ['name', 'year', 'starring', 'rating'];

  constructor(private moviesService: MoviesService ) {};

  ngOnInit(): void {
    this.moviesList = this.moviesService.getMovies();
  };

  
}
