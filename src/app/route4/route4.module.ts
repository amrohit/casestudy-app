import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountdowntimerLogsComponent } from './countdowntimer-logs/countdowntimer-logs.component';
import { CountdowntimerOpsComponent } from './countdowntimer-ops/countdowntimer-ops.component';
import { CountdowntimerTrackComponent } from './countdowntimer-track/countdowntimer-track.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';

@NgModule({
  declarations: [
    Route4Component,
    CountdowntimerComponent,
    CountdowntimerOpsComponent,
    CountdowntimerLogsComponent,
    CountdowntimerTrackComponent,
  ],
  imports: [CommonModule, Route4RoutingModule, FormsModule],
})
export class Route4Module {}
