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
  displayedColumns: string[] = ['name', 'starring', 'year', 'rating'];

  constructor(private moviesService: MoviesService ) {};

  ngOnInit(): void {
    this.moviesList = this.moviesService.getMovies();
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    /*this.moviesList.filter = filterValue.trim().toLowerCase();*/
  };
  clickedRows = () => console.log('row clicked');
  addMovie = () => console.log('add movie');
}