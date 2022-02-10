import { Component, OnInit } from '@angular/core';
import { COUNTER_TRACK } from './counter-track.enum';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss'],
})
export class Route3Component implements OnInit {
  timerValue = 0;
  clickTrack!: COUNTER_TRACK;
  constructor() {}

  ngOnInit(): void {}
}
