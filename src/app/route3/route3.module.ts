import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { CountdowntimerOpsComponent } from './countdowntimer-ops/countdowntimer-ops.component';
import { CountdowntimerLogsComponent } from './countdowntimer-logs/countdowntimer-logs.component';
import { CountdowntimerTrackComponent } from './countdowntimer-track/countdowntimer-track.component';


@NgModule({
  declarations: [
    Route3Component,
    CountdowntimerComponent,
    CountdowntimerOpsComponent,
    CountdowntimerLogsComponent,
    CountdowntimerTrackComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
