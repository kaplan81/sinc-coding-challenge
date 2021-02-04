import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  films$: Observable<Film[]> = this.starWarsService.getFilms();

  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService) {}

  goToFilm(url: string): void {
    this.starWarsService.goToEntity(url, this.route);
  }
}
