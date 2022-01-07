import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  moviesListMocked: Movie[] = [
    {
      id: 1,
      name: 'ET',
      year: 1975,
      starring: 'Drew Barrymore',
    },
    {
      id: 2,
      name: 'Kill Bill',
      year: 1998,
      starring: 'Dee Wallace',
      rating: 5,
    },
    {
      id: 3,
      name: 'Matrix',
      year: 2021,
      starring: 'Erika Eleniak',
      rating: 10,
    },
    {
      id: 4,
      name: 'Spiderman',
      year: 2010,
      starring: 'Robert MacNaughton',
    },
    {
      id: 5,
      name: 'Toy Story',
      year: 1998,
      starring: 'Peter Coyote',
      rating: 9,
    },
    {
      id: 6,
      name: 'Back to the future',
      year: 1981,
      starring: 'C. Thomas Howell',
      rating: 10,
    }
  ];

  starringsListMocked: string[] = ['Keanu Reeves', 'Carrie-Anne Moss', 'Yahya Abdul-Mateen II', 'Jessica Henwick', 'Jonathan Groff', 'Neil Patrick Harris', 'Priyanka Chopra Jonas', 'Jada Pinkett Smith'];

  // CONSIDERATION: There should be 2 different services, movies and starrings. In order to simplify I have both in the same service.

  constructor() {};

  getMovies(): Movie[] {
    return this.moviesListMocked;
  };
  getStarrings(): string[] {
    return this.starringsListMocked;
  };
  addMovies(data:Movie) {
    this.moviesListMocked.push(data);
  };
  updateMovies(data:Movie) {
    const index:number = this.moviesListMocked.findIndex((e:Movie) => e.id === data.id);
    this.moviesListMocked[index] = data;
  };
  getNewId(){
    const lastItem: number = this.moviesListMocked[this.moviesListMocked.length - 1].id;
    return  lastItem + 1; // For security it should be a non repeated random number
  };
}
