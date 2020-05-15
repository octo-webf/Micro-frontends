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

  PARENT_APPLICATION_URL: string = 'http://localhost:5000';
  callbackMessage: String = 'Angular: I got the message!';
  buttonMessage: String = 'Hello from Angular';

  ngOnInit() {
    this.isActive = false;
    this.msg = this.getQuery();

    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }

  // Receive information via routing parameters
  getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('input');
    if (myParam !== null && myParam.length > 0) {
      return myParam;
    } else {
      return 'Nothing yet';
    }
  }

  // Receive information via DOM events
  receiveMessage(event) {
    if (event.origin !== this.PARENT_APPLICATION_URL) {
      return;
    }
    this.msg = event.data.info;
    this.isActive = true;

    // Sending information back via DOM events
    event.source.postMessage(
      { info: this.callbackMessage, callback: true },
      event.origin
    );
  }

  messageTheOthers() {
    window.parent.postMessage(
      { info: this.buttonMessage, callback: false },
      this.PARENT_APPLICATION_URL
    );
  }
}
