import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  page: String;

  constructor() {}

  ngOnInit() {
    this.page = 'Home';
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('input');
    if (myParam.length > 0) {
      this.page = myParam;
    }
  }
}
