import { Component, OnInit } from '@angular/core';
import { mockData } from './mockData';

interface IMockResponse {
  name: string;
  class: number;
  section: string;
  sub1: number;
  sub2: number;
  sub3: number;
}

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss'],
})
export class Route5Component implements OnInit {
  mockApiResponse: IMockResponse[] = [];
  clickCount = 0;
  lastKey = '';
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mockApiResponse = [...mockData];
  }

  sortBy(key: string) {
    if (key !== this.lastKey && this.lastKey !== '') {
      this.clickCount = 0;
      this.getData();
      this.lastKey = key;
      return;
    }
    if (this.clickCount === 0) {
      this.mockApiResponse.sort((a: any, b: any) => a[key] - b[key]);
      this.clickCount = this.clickCount + 1;
    } else if (this.clickCount === 1) {
      this.mockApiResponse.sort((a: any, b: any) => b[key] - a[key]);
      this.clickCount = this.clickCount + 1;
    } else {
      this.clickCount = 0;
      this.getData();
    }
    this.lastKey = key;
  }
}
