import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private timerCountSub = new Subject();
  private counterTrackSub = new Subject();
  private timerValSub = new BehaviorSubject(0);
  private clickTrackSub = new Subject();

  timerCount$ = this.timerCountSub.asObservable();
  counterTrack$ = this.counterTrackSub.asObservable();
  timerVal$ = this.timerValSub.asObservable();
  clickTrack$ = this.clickTrackSub.asObservable();

  constructor() {}

  yieldTimerCount(val: any) {
    this.timerCountSub.next(val);
  }

  yieldCounterTrack(val: any) {
    this.counterTrackSub.next(val);
  }

  yieldTimerVal(val: any) {
    this.timerValSub.next(val);
  }

  yieldClickTrack(val: any) {
    this.clickTrackSub.next(val);
  }
}
