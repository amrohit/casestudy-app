import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  @Output() emitTimerCount = new EventEmitter<any>();
  @Output() emitCounterTrack = new EventEmitter<COUNTER_TRACK>();

  setIntervalVal!: any;
  prevTimeVal = 0;
  constructor() {}

  ngOnInit(): void {}

  onStartPause() {
    if (!this.timerValue) return;
    if (!this.isStarted) this.timerValueOps = +this.timerValue;
    this.isStarted = !this.isStarted;
    this.btnLabel = this.isStarted ? 'Pause' : 'Start';
    if (!this.isStarted) {
      clearInterval(this.setIntervalVal);
      this.prevTimeVal = +this.timerValueOps;
      this.emitCounterTrack.emit(COUNTER_TRACK.PAUSE);
    } else {
      if (!this.prevTimeVal) {
        this.executeTimer(this.timerValueOps);
      } else {
        this.executeTimer(this.prevTimeVal);
      }
      this.emitCounterTrack.emit(COUNTER_TRACK.START);
    }
  }

  onReset() {
    this.isStarted = false;
    this.btnLabel = 'Start';
    this.timerValue = '';
    this.prevTimeVal = 0;
    this.timerValueOps = 0;
    clearInterval(this.setIntervalVal);
    this.emitTimerCount.emit(0);
    this.emitCounterTrack.emit(COUNTER_TRACK.RESET);
  }

  executeTimer(numMs: any) {
    if (this.setIntervalVal) clearInterval(this.setIntervalVal);
    this.setIntervalVal = setInterval(() => {
      if (numMs <= 0) {
        this.onReset();
        this.emitTimerCount.emit(0);
      } else {
        this.timerValueOps = numMs;
        this.emitTimerCount.emit(this.timerValueOps);
      }
      numMs -= 1;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.setIntervalVal) clearInterval(this.setIntervalVal);
  }
}
