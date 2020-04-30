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
    for (var i = 1; i < 11; i++) {
      this.objets.push(i);
    }
  }
}
