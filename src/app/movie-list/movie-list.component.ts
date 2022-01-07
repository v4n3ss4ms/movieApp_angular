import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie'; 
import { RatingPopupComponent } from '../rating-popup/rating-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  moviesList!: Movie[];
  displayedColumns: string[] = ['name', 'starring', 'year', 'rating'];
  filter: string = '';
  filteredMoviesList!: Movie[];

  constructor(private moviesService: MoviesService, public dialog: MatDialog, private _router: Router ) {};

  ngOnInit(): void {
    this.moviesList = this.moviesService.getMovies();
    this.filteredMoviesList = this.moviesList;
  };

  applyFilter() {
    this.filteredMoviesList = this.moviesList.filter((e) => e.name.toLowerCase().includes(this.filter) || e.starring.toLowerCase().includes(this.filter));
  };

  clearFilter() {
    this.filter = '';
    this.filteredMoviesList = this.moviesList;
  };
  
  addMovie = () => this._router.navigateByUrl('/new');

  openRatingDialog(e: Movie): void {
    const dialogRef = this.dialog.open(RatingPopupComponent, {
      width: '250px',
      data: e,
    });
  }
}