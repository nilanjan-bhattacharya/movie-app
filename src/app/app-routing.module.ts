import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'details',
  component: MovieDetailsComponent,
},
{
  path: 'search',
  component: MovieSearchComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
