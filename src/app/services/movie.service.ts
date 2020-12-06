import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { SearchCriteria } from '../models/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = "https://localhost:44317/";
  constructor(private readonly http: HttpClient) { }

  getLatestMovies(count: number){
    return this.http.get<Movie[]>( this.baseUrl + 'api/movie/latest/' + count );
  }

  getMoviesBySearch(queryString: string) {
    return this.http.get<Movie[]>( this.baseUrl + 'api/movie/search?' + queryString );
  }

  getMovieByTitleAndDirector(title: string, director: string){
    return this.http.get<Movie>( this.baseUrl + 'api/movie/details/?name=' + title+'&director='+director );
  }
}
