import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fx-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.less']
})
export class LeftSideComponent implements OnInit {
  @Input('image-url') imageUrl: string;
  @Input() alt: string;

  constructor() { }

  ngOnInit(): void {
  }

}
