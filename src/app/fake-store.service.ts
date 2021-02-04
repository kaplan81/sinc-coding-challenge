import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  private static readonly baseUrl: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient, private router: Router) {}

  getProduct(productId: number): Observable<any[]> {
    const url: string = `${FakeStoreService.baseUrl}/products/${productId}`;
    return this.http.get<any>(url);
  }

  getProducts(): Observable<any[]> {
    const url: string = `${FakeStoreService.baseUrl}/products`;
    return this.http.get<any>(url);
  }

  goToEntity(entityId: number, route: ActivatedRoute): void {
    this.router.navigate([entityId], { relativeTo: route });
  }
}
