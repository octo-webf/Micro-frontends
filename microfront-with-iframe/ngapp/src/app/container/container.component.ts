import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  objets = [];

  constructor() {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('input');
    if (myParam.length > 0) {
      this.objets.push(myParam);
    }
  }
}
