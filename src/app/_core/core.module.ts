import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Angular2SwapiModule } from 'src/app/products/products/node_modules/src/app/products/product/node_modules/angular2-swapi';
import { InterceptorService } from './interceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  exports: [HttpClientModule, Angular2SwapiModule],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule | null
  ) {
    // Prevent reimport of the CoreModule.
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule ONLY'
      );
    }
  }
}
