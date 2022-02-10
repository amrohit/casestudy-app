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
  selector: 'app-countdowntimer-logs',
  templateUrl: './countdowntimer-logs.component.html',
  styleUrls: ['./countdowntimer-logs.component.scss'],
})
export class CountdowntimerLogsComponent implements OnInit, OnDestroy {
  @Input() countTrack!: COUNTER_TRACK;
  countTrackSubs!: Subscription;
  logs: string[] = [];
  constructor(private countService: CountService) {}

  ngOnInit(): void {
    this.countTrackSubs = this.countService.counterTrack$.subscribe(
      (resp: any) => {
        this.countTrack = resp;
        this.countTrackProcess();
      }
    );
  }
  countTrackProcess() {
    if (this.countTrack === COUNTER_TRACK.START) {
      this.logs.unshift(`Started at ${new Date().toLocaleString()}`);
    }
    if (this.countTrack === COUNTER_TRACK.PAUSE) {
      this.logs.unshift(`Paused at ${new Date().toLocaleString()}`);
    }
  }

  ngOnDestroy(): void {
    if (this.countTrackSubs) this.countTrackSubs.unsubscribe();
  }
}
