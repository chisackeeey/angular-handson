import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { helloReducer } from './state/hello.reducer';
import { helloFeatureName } from './state/hello.state';

@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    HelloRoutingModule,
    StoreModule.forFeature(helloFeatureName, helloReducer),
  ],
})
export class HelloModule {}
