import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';
import { SortProductPipe } from './sort-product.pipe';


@NgModule({
  declarations: [
    Route2Component,
    SortProductPipe
  ],
  imports: [
    CommonModule,
    Route2RoutingModule
  ]
})
export class Route2Module { }
