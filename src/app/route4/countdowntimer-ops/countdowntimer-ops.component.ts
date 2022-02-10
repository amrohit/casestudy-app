import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CountService } from '../count.service';
import { COUNTER_TRACK } from '../counter-track.enum';

@Component({
  selector: 'app-countdowntimer-ops',
  templateUrl: './countdowntimer-ops.component.html',
  styleUrls: ['./countdowntimer-ops.component.scss'],
})
export class CountdowntimerOpsComponent implements OnInit, OnDestroy {
  timerValue = '';
  timerValueOps = 0;
  isStarted = false;
  btnLabel = 'Start';
  logs: string[] = [];
  emitTimerCountSubs!: Subscription;
  emitCounterTrackSubs!: Subscription;
  setIntervalVal!: any;
  prevTimeVal = 0;
  constructor(private countService: CountService) {}

  ngOnInit(): void {}

  onStartPause() {
    if (!this.timerValue) return;
    if (!this.isStarted) this.timerValueOps = +this.timerValue;
    this.isStarted = !this.isStarted;
    this.btnLabel = this.isStarted ? 'Pause' : 'Start';
    if (!this.isStarted) {
      clearInterval(this.setIntervalVal);
      this.prevTimeVal = +this.timerValueOps;
      this.countService.yieldCounterTrack(COUNTER_TRACK.PAUSE);
      this.logs.unshift(`Paused at ${this.timerValueOps}`);
    } else {
      if (!this.prevTimeVal) {
        this.executeTimer(this.timerValueOps);
      } else {
        this.executeTimer(this.prevTimeVal);
      }
      this.countService.yieldCounterTrack(COUNTER_TRACK.START);
    }
  }

  onReset() {
    this.isStarted = false;
    this.btnLabel = 'Start';
    this.timerValue = '';
    this.prevTimeVal = 0;
    this.timerValueOps = 0;
    clearInterval(this.setIntervalVal);
    this.countService.yieldTimerVal(0);
    this.countService.yieldCounterTrack(COUNTER_TRACK.RESET);
  }

  executeTimer(numMs: any) {
    if (this.setIntervalVal) clearInterval(this.setIntervalVal);
    this.setIntervalVal = setInterval(() => {
      if (numMs <= 0) {
        this.onReset();
        this.countService.yieldTimerVal(0);
      } else {
        this.timerValueOps = numMs;
        this.countService.yieldTimerVal(this.timerValueOps);
      }
      numMs -= 1;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.setIntervalVal) clearInterval(this.setIntervalVal);
  }
}
