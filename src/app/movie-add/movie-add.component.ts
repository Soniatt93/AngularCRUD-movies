import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovies();
  }
 
  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  goBack(): void {
    this.location.back();
  }

  add(title: string, image:MatCardImage, genres: string, year: number, synopsis: string ): void {
    title = title.trim();
    if (!title) { return; }
    this.movieService.addMovie({ title, image, genres, year, synopsis } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
      this.goBack();
  }
}
