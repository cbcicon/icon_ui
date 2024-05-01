import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockTagComponent } from './block-tag/block-tag.component';

@NgModule({
  declarations: [
    BlockTagComponent
  ],
  imports: [CommonModule],
  exports: [BlockTagComponent],
})
export class SharedModule {
  
}
