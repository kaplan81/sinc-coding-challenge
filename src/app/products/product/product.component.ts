import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FakeStoreService } from '../../fake-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product$: Observable<any> = of({});

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService
  ) {}
}
