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

  /**
   * Basic sort method attached over table column onChange event
   * @param keyStr
   * @returns
   */
  sortBy(keyStr: string) {
    if (this.isDefaultData(keyStr)) {
      this.clickCount = 0;
      this.getData();
      this.lastKey = keyStr;
      return;
    }
    if (this.clickCount === 0) {
      this.sortAsc(keyStr);
      this.clickCount = this.clickCount + 1;
    } else if (this.clickCount === 1) {
      this.sortDesc(keyStr);
      this.clickCount = this.clickCount + 1;
    } else {
      this.clickCount = 0;
      this.getData();
    }
    this.lastKey = keyStr;
  }

  /**
   * to load default data
   * @param keyStr
   * @returns
   */
  isDefaultData(keyStr: any) {
    return (
      keyStr !== this.lastKey &&
      this.lastKey !== '' &&
      this.clickCount !== 0 &&
      this.clickCount !== 1
    );
  }

  /**
   * Convert data in ascending
   * @param keyStr
   */
  sortAsc(keyStr: any) {
    this.mockApiResponse.sort((a: any, b: any) => {
      if (a[keyStr] < b[keyStr]) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * Convert data in descending
   * @param keyStr
   */
  sortDesc(keyStr: any) {
    this.mockApiResponse.sort((a: any, b: any) => {
      if (a[keyStr] > b[keyStr]) {
        return -1;
      }
      return 0;
    });
  }
}
