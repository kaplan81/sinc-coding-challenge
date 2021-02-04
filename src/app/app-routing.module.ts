import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (mod: any) => mod.ProductsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  // Uncomment the next to enable tracing and to see what events are happening during the navigation lifecycle.
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
