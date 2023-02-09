import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  errorMessage$ = new BehaviorSubject<string[]>([]);
  errorMessageObservable = this.errorMessage$.asObservable();

  constructor() { }

  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    }
    else if (error.status === 404) {
      this.handle404Error(error);
    }
    else {
      this.handleOtherError(error);
    }
  }

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    //ToDo Can be redirect to some page with this.router.navigate(['/500']); or show some notification
  }

  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
  }
  private handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
  }

  private createErrorMessage = (error: HttpErrorResponse) => {
    const type = error.error ? error.error : error.statusText;
    let errorMessage = type;
    if (error.message){
      errorMessage = `Message: ${error.message} | ${type}`;
    }
    this.errorMessage$.value.push(errorMessage);

    // this.errorMessage$.next(errorMessage);
  }
}
