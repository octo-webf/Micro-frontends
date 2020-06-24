import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';

  handleClick() {
    const event = new CustomEvent('messageFromAngular', {
      bubbles: true,
      detail: {
        message: 'Hello!',
      },
    });
    window.dispatchEvent(event);
  }
}
