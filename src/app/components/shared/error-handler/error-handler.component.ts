import {Component, OnInit} from '@angular/core';
import {ErrorHandlerService} from '../../../services/error-handler.service';

@Component({
  selector: 'fx-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {
  errors = [];

  constructor(private errorObservable: ErrorHandlerService) {
  }

  ngOnInit(): void {
    this.handle();
  }

  private handle(): void {
    this.errorObservable.errorMessageObservable.subscribe((response) => {
      this.errors = response;
    });
  }

}
