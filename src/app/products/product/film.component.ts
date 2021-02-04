import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../fake-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$: Observable<Product> = this.starWarsService.getProduct(
    +(this.route.snapshot.paramMap.get('productId') as string)
  );

  constructor(
    private route: ActivatedRoute,
    private starWarsService: StarWarsService
  ) {}
}
