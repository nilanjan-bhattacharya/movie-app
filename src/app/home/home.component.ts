import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestMovies!: Movie[];
  searchedMovies!: Movie[];

  searchBox: string = '';
  constructor(public movieService: MovieService,
            public router: Router) { }

  ngOnInit() {
    this.movieService.getLatestMovies(4).subscribe(
      (data) => {
        this.latestMovies = data;
      }
    );
  }

  quickSearch() {
    this.movieService.getMoviesBySearch('Title='+this.searchBox).subscribe(
      (data) => {
        this.searchedMovies = data;
      }
    );
  }

  showDetiails(movie: Movie) {
    this.router.navigate(['/details'], { queryParams: { title: movie.title, director: movie.info.directors[0] } });
  }
}
