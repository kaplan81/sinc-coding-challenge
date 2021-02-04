import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product/node_modules/angular2-swapi';
import { StarWarsService } from '../../fake-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<Product[]> = this.starWarsService.getProducts();

  constructor(
    private route: ActivatedRoute,
    private starWarsService: StarWarsService
  ) {}

  goToProduct(url: string): void {
    this.starWarsService.goToEntity(url, this.route);
  }
}
