import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Angular2SwapiService, Film, People, Planet } from 'angular2-swapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private router: Router, private swapiService: Angular2SwapiService) {}

  getCharacter(id: number): Observable<People> {
    return this.swapiService.getPeopleById(id);
  }

  getCharacters(): Observable<People[]> {
    return this.swapiService.getPeople();
  }

  // This API always uses a slash at the end of URLs.
  getEntityId(url: string): string {
    return url.match(/.*\/([^/]+)\//)?.[1] as string;
  }

  getFilm(id: number): Observable<Film> {
    return this.swapiService.getFilm(id);
  }

  getFilms(): Observable<Film[]> {
    return this.swapiService.getFilms();
  }

  getPlanet(id: number): Observable<Planet> {
    return this.swapiService.getPlanet(id);
  }

  getPlanets(): Observable<Planet[]> {
    return this.swapiService.getPlanets();
  }

  goToEntity(url: string, route: ActivatedRoute): void {
    const entityId: string = this.getEntityId(url);
    this.router.navigate([entityId], { relativeTo: route });
  }
}
