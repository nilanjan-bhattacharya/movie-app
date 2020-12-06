import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchBox: string = '';
  searchCriteria: string = 'Title';

  searchCriterias: string[] = ['Title', 'Year', 'Genre', 'Actor', 'Director'];


  searchedMovies!: Movie[];

  constructor(public movieService: MovieService,
    public router: Router) { }
    
  ngOnInit() {
  }

  quickSearch() {
    this.movieService.getMoviesBySearch(this.searchCriteria+'='+this.searchBox).subscribe(
      (data) => {
        this.searchedMovies = data;
      }
    );
  }

  showDetiails(movie: Movie) {
    this.router.navigate(['/details'], { queryParams: { title: movie.title, director: movie.info.directors[0] } });
  }

}
