import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { FilmComponent } from './film/film.component';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';

@NgModule({
  imports: [SharedModule, FilmsRoutingModule],
  declarations: [FilmsComponent, FilmComponent],
})
export class FilmsModule {}
