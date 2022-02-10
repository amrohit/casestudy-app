import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss'],
})
export class Route6Component implements OnInit {
  divCollection = new Array(30);
  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    //Logic To Check whether we are bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.divCollection.push(...new Array(10));
    }
  }
  constructor() {}

  ngOnInit(): void {}

  showAlert(i: number) {
    alert(`Button  in ${i + 1}th div  clicked`);
  }
}
