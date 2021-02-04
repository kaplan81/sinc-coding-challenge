import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeStoreService } from '../../fake-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$: Observable<any> = this.fakeStoreService.getProduct(
    +(this.route.snapshot.paramMap.get('productId') as string)
  );

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService
  ) {}
}
