import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fx-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  author = 'Alejandro Bolaño';
  company = 'Football - FXStreet';

  constructor() { }

  ngOnInit(): void {
  }

}
