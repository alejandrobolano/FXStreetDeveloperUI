import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fx-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.less']
})
export class RightSideComponent implements OnInit {
  @Input('image-url') imageUrl: string;
  @Input() alt: string;

  constructor() { }

  ngOnInit(): void {
  }

}
