import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  msg: String;
  isActive: boolean;

  ngOnInit() {
    this.isActive = false;

    // Receive information via routing parameters
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('input');
    if (myParam !== null && myParam.length > 0) {
      this.msg = myParam;
    } else {
      this.msg = 'Nothing yet';
    }
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }

  // Receive information via DOM events
  receiveMessage(event) {
    if (event.origin !== 'http://localhost:5000') {
      return;
    }
    this.msg = event.data;
    this.isActive = true;

    // Sending information back via DOM events
    event.source.postMessage('Angular: I got the message!', event.origin);
  }

  messageToReact() {
    window.parent.postMessage('Angular: Hello from Angular', '*');
  }
}
