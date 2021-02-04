import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FakeStoreService } from '../../fake-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<any[]> = of([{}]);

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService
  ) {}
}
