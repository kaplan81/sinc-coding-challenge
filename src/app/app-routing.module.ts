import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then((mod: any) => mod.FilmsModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters.module').then((mod: any) => mod.CharactersModule),
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then((mod: any) => mod.PlanetsModule),
  },
  {
    path: '**',
    redirectTo: 'films',
  },
];

@NgModule({
  // Uncomment the next to enable tracing and to see what events are happening during the navigation lifecycle.
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
