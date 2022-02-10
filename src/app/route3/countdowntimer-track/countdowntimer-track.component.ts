import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { COUNTER_TRACK } from '../counter-track.enum';

@Component({
  selector: 'app-countdowntimer-track',
  templateUrl: './countdowntimer-track.component.html',
  styleUrls: ['./countdowntimer-track.component.scss'],
})
export class CountdowntimerTrackComponent implements OnInit, OnChanges {
  start = 0;
  paused = 0;
  @Input() countTrack!: COUNTER_TRACK;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.countTrack === COUNTER_TRACK.START) {
      this.start = this.start + 1;
    }
    if (this.countTrack === COUNTER_TRACK.PAUSE) {
      this.paused = this.paused + 1;
    }
    if (this.countTrack === COUNTER_TRACK.RESET) {
      this.paused = this.start = 0;
    }
  }
}
