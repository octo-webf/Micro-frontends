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
    // Receive information via routing parameters
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('input');
    if (myParam !== null && myParam.length > 0) {
      this.msg = myParam;
    } else {
      this.msg = 'Nothing yet';
    }

    window.addEventListener('message', this.receiveMessage, false);
  }

  // Receive information via DOM events
  receiveMessage(event) {
    if (event.origin !== 'http://localhost:5000') {
      return;
    }
    console.log(event.data);
    this.msg = event.data;
  }
}
