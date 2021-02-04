import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  private static readonly baseUrl: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    const url: string = `${FakeStoreService.baseUrl}/products`;
    return this.http.get<any>(url);
  }

  // goToEntity(url: string, route: ActivatedRoute): void {
  //   const entityId: string = 'entity';
  //   this.router.navigate([entityId], { relativeTo: route });
  // }
}
