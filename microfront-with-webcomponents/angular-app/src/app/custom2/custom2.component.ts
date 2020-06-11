import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom2',
  templateUrl: './custom2.component.html',
  styleUrls: ['./custom2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Custom2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
