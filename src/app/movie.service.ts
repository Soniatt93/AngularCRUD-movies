import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    //return of(MOVIES);
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(    );
  }

  getMovie(id: number): Observable<Movie> {
    //return of(MOVIES.find(movie => movie.id === id));
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url)
  }

  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions)
  }

  deleteMovie (movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;

    return this.http.delete<Movie>(url, this.httpOptions)
  }

  updateMovie (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions)
  }


}
