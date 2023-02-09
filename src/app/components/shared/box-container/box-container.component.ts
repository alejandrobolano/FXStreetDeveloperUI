import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fx-box-container',
  templateUrl: './box-container.component.html'
})
export class BoxContainerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
