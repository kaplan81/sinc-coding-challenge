import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [SharedModule, ProductsRoutingModule],
  declarations: [ProductsComponent, ProductComponent],
})
export class ProductsModule {}
