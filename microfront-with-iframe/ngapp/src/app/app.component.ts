import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  msg: String;

  constructor() {}

  ngOnInit() {
    this.msg = "Rien pour l'instant";
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('input');
    if (myParam !== null && myParam.length > 0) {
      this.msg = myParam;
    }
  }
}
