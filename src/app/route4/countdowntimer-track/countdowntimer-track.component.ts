import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CountService } from '../count.service';
import { COUNTER_TRACK } from '../counter-track.enum';

@Component({
  selector: 'app-countdowntimer-track',
  templateUrl: './countdowntimer-track.component.html',
  styleUrls: ['./countdowntimer-track.component.scss'],
})
export class CountdowntimerTrackComponent implements OnInit, OnDestroy {
  start = 0;
  paused = 0;
  countTrack!: COUNTER_TRACK;
  countTrackSubs!: Subscription;
  constructor(private countService: CountService) {}

  ngOnInit(): void {
    this.countTrackSubs = this.countService.counterTrack$.subscribe(
      (val: any) => {
        this.countTrack = val;
        this.countTrackProcess();
      }
    );
  }

  countTrackProcess() {
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

  ngOnDestroy(): void {
    if (this.countTrackSubs) this.countTrackSubs.unsubscribe();
  }
}
