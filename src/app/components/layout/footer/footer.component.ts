import { Component, OnInit } from '@angular/core';
import { SupportUrls } from '../../../helper/SupportUrls';

@Component({
  selector: 'fx-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  author = 'Alejandro Bolaño';
  company = 'Football - FXStreet';
  swaggerUrl = SupportUrls.SwaggerApi;
  repositoryUrl = SupportUrls.Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
