import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { InterceptorService } from './interceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  exports: [HttpClientModule],
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
