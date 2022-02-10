import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountService } from '../count.service';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.scss'],
})
export class CountdowntimerComponent implements OnInit {
  timerValue$ = this.counterService.timerVal$;
  constructor(private counterService: CountService) {}

  ngOnInit(): void {}
}
