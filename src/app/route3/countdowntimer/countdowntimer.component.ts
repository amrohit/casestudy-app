import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.scss']
})
export class CountdowntimerComponent implements OnInit {
  @Input() timerValue = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
