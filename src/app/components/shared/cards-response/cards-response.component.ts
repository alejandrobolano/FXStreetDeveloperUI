import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/Card';

@Component({
  selector: 'fx-cards-response',
  templateUrl: './cards-response.component.html',
  styleUrls: ['./cards-response.component.css']
})
export class CardsResponseComponent implements OnInit {
  @Input() cards: Card[];

  constructor() { }

  ngOnInit(): void {
  }

}
