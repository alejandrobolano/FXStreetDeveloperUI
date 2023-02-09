import {Component} from '@angular/core';

@Component({
  selector: 'fx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FXStreetDeveloperUI';
  date = new Date().getFullYear();

  constructor() {
  }



}
