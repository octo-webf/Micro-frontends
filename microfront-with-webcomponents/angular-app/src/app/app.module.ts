import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [AppComponent, CustomComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, CustomComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    const { injector } = this;

    const ngCustomElement = createCustomElement(CustomComponent, { injector });

    customElements.define('ng-el', ngCustomElement);
  }
}
