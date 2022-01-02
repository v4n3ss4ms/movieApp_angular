import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

const validateYear = function(): ValidatorFn {
  const yearRe: RegExp = /^[0-9]{4}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = yearRe.test(control.value);
    return forbidden ? {forbiddenYear: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.sass']
})

export class NewMovieComponent implements OnInit {
  starrings!: string[];

  movieForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    movieYear: new FormControl('', [Validators.required, validateYear]),
    movieStarring: new FormControl('', Validators.required),
  });

  constructor(private moviesService: MoviesService, private _router: Router) { }

  ngOnInit(): void {
    this.starrings = this.moviesService.getStarrings();
  }

  saveNewMovie() {
    console.log(this.movieForm);
  }

  goBack = () => this._router.navigateByUrl('');


}
