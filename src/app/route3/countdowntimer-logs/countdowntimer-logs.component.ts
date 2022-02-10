import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { COUNTER_TRACK } from '../counter-track.enum';

@Component({
  selector: 'app-countdowntimer-logs',
  templateUrl: './countdowntimer-logs.component.html',
  styleUrls: ['./countdowntimer-logs.component.scss'],
})
export class CountdowntimerLogsComponent implements OnInit, OnChanges {
  @Input() countTrack!: COUNTER_TRACK;
  logs: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.countTrack === COUNTER_TRACK.START) {
      this.logs.unshift(`Started at ${new Date().toLocaleString()}`);
    }
    if (this.countTrack === COUNTER_TRACK.PAUSE) {
      this.logs.unshift(`Paused at ${new Date().toLocaleString()}`);
    }
  }
}
