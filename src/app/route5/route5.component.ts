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
  key = '';
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mockApiResponse = [...mockData];
  }

  sortBy(keyStr: string) {
    this.key = keyStr;
    console.log('key => ', this.key);
    console.log('lastkey => ', this.lastKey);
    console.log('clickcount => ', this.clickCount);
    if (
      this.key !== this.lastKey &&
      this.lastKey !== '' &&
      this.clickCount !== 0 &&
      this.clickCount !== 1
    ) {
      this.clickCount = 0;
      this.getData();
      this.lastKey = this.key;
      return;
    }
    if (this.clickCount === 0) {
      this.mockApiResponse.sort((a: any, b: any) => {
        if (a[keyStr] < b[keyStr]) {
          return -1;
        }
        return 0;
      });
      this.clickCount = this.clickCount + 1;
    } else if (this.clickCount === 1) {
      this.mockApiResponse.sort((a: any, b: any) => {
        if (a[this.key] > b[this.key]) {
          return -1;
        }
        return 0;
      });
      this.clickCount = this.clickCount + 1;
    } else {
      this.clickCount = 0;
      this.getData();
    }
    this.lastKey = this.key;
  }
}
