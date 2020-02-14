import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';
import { MovieEditComponent }  from './movie-edit/movie-edit.component';
import { MovieAddComponent }  from './movie-add/movie-add.component';
import { ContactComponent }   from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'add', component: MovieAddComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
