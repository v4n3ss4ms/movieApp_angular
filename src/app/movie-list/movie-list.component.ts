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

  constructor(private moviesService: MoviesService, public dialog: MatDialog, private _router: Router ) {};

  ngOnInit(): void {
    this.moviesList = this.moviesService.getMovies();
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    /*this.moviesList.filter = filterValue.trim().toLowerCase();*/
  };
  
  addMovie = () => this._router.navigateByUrl('/new');

  openRatingDialog(e: Movie): void {
    console.log(e);
    const dialogRef = this.dialog.open(RatingPopupComponent, {
      width: '250px',
      data: e,
    });
  }
}