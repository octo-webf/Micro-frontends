import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  CONTENT_HOST: String = 'http://localhost:4100';
  productList = [];

  constructor() {}

  ngOnInit(): void {
    fetch(`${this.CONTENT_HOST}/productList.json`)
      .then((res) => res.json())
      .then((list) => (this.productList = list.products))
      .then(() => console.log(this.productList));
  }

  handleClick(product) {
    console.log(product);
  }
}
