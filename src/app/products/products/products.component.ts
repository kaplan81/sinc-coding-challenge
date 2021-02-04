import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeStoreService } from '../../fake-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<any[]> = this.fakeStoreService.getProducts();

  constructor(
    private fakeStoreService: FakeStoreService,
    private route: ActivatedRoute
  ) {}

  goToProduct(productId: number): void {
    this.fakeStoreService.goToEntity(productId, this.route);
  }
}
