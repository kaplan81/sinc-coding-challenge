import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from './mat.module';

@NgModule({
  exports: [CommonModule, MatModule],
})
export class SharedModule {}
