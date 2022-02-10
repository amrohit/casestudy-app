import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountdowntimerLogsComponent } from './countdowntimer-logs/countdowntimer-logs.component';
import { CountdowntimerOpsComponent } from './countdowntimer-ops/countdowntimer-ops.component';
import { CountdowntimerTrackComponent } from './countdowntimer-track/countdowntimer-track.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';

@NgModule({
  declarations: [
    Route3Component,
    CountdowntimerComponent,
    CountdowntimerOpsComponent,
    CountdowntimerLogsComponent,
    CountdowntimerTrackComponent,
  ],
  imports: [CommonModule, Route3RoutingModule, FormsModule],
})
export class Route3Module {}
