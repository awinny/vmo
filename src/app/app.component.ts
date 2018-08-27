import { Component } from '@angular/core';

import { routes } from './app.routing';

@Component({
  selector: '#vmo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];

  constructor() {
    this.items = routes;

    window['CorporateUi'].baseComponents();
  }
}
