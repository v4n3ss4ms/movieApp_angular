import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.sass']
})

export class NewMovieComponent implements OnInit {
  starrings!: string[];
  movieForm!: FormGroup;

  constructor(private moviesService: MoviesService, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.starrings = this.moviesService.getStarrings();
    this.movieForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      movieYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      movieStarring: ['', Validators.required]
    });
  }
  saveNewMovie() {
    if (this.movieForm.valid) {
      const newMovie: Movie = {
        id: this.moviesService.getNewId(),
        name: this.movieForm.value.movieName,
        year: parseInt(this.movieForm.value.movieYear, 10),
        starring: this.movieForm.value.movieStarring,
      };
      this.moviesService.addMovies(newMovie);
      this.goBack();
    }
  }

  goBack = () => this._router.navigateByUrl('');

}
