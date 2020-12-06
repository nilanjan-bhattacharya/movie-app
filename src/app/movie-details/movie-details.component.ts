import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  title!: string;
  director!: string;

  movie!: Movie;

  constructor(public movieService: MovieService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.title = params.title;
      this.director = params.director;
    });

    this.movieService.getMovieByTitleAndDirector(this.title, this.director).subscribe(
      (data) => {
        this.movie = data;
      }
    );

  }

}
