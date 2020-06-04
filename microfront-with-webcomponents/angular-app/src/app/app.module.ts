import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

//import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { Custom2Component } from './custom2/custom2.component';

@NgModule({
  declarations: [CustomComponent, Custom2Component],
  imports: [BrowserModule],
  //bootstrap: [CustomComponent],
  entryComponents: [CustomComponent, Custom2Component],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const injector = this.injector;
    const ngCustomElement = createCustomElement(CustomComponent, { injector });
    const ngCustom2Element = createCustomElement(Custom2Component, {
      injector,
    });

    customElements.define('angular-app', ngCustomElement);
    customElements.define('angular-second-app', ngCustom2Element);
  }
}
