import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  constructor(private router: Router) {}

  goToEntity(url: string, route: ActivatedRoute): void {
    const entityId: string = 'entity';
    this.router.navigate([entityId], { relativeTo: route });
  }
}
