import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { TranslateStoreModule } from './state/translate-store.module';

@NgModule({
  declarations: [TranslateComponent],
  imports: [CommonModule, TranslateRoutingModule, TranslateStoreModule],
})
export class TranslateModule {}
