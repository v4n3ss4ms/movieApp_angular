import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.sass']
})

export class NewMovieComponent implements OnInit {
  starrings!: string[];

  movieForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    movieYear: new FormControl('', Validators.required),
    movieStarring: new FormControl('', Validators.required),
  });

  constructor(private moviesService: MoviesService, private _router: Router) { }

  ngOnInit(): void {
    this.starrings = this.moviesService.getStarrings();
  }

  saveNewMovie() {
    const newMovie: Movie = {
      id: this.moviesService.getNewId(),
      name: this.movieForm.value.movieName,
      year: parseInt(this.movieForm.value.movieYear, 10),
      starring: this.movieForm.value.movieStarring,
    };

    this.moviesService.addMovies(newMovie);
    this.goBack();
  }

  goBack = () => this._router.navigateByUrl('');

}
