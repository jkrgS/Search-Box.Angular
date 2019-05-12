import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
