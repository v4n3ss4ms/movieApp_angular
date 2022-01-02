import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-rating-popup',
  templateUrl: './rating-popup.component.html',
  styleUrls: ['./rating-popup.component.sass']
})
export class RatingPopupComponent implements OnInit {
  rating: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected: number = 0;

  constructor(
    public ratingPopupComponent: MatDialogRef<RatingPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private moviesService: MoviesService
  ) {}

  onNoClick(): void {
    this.ratingPopupComponent.close();
  }

  onRateClick(): void {
    this.data.rating = this.selected;
    this.moviesService.updateMovies(this.data);
    this.ratingPopupComponent.close();
  }

  ngOnInit(): void {
    this.selected = this.data.rating || 0;
  }

}
