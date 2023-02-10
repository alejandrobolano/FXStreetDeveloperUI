import { Injectable } from '@angular/core';
import {RepositoryService} from '../api/repository.service';
import {ErrorHandlerService} from '../error-handler.service';
import {Minute} from '../../models/Minute';
import {ApiAddress} from '../../helper/ApiAddress';

@Injectable({
  providedIn: 'root'
})
export class MinutesRepositoryService {

  constructor(private connection: RepositoryService<Minute>,
              private errorHandler: ErrorHandlerService) { }

  getMinutesCards(): Minute[] {
    let minutes = [];
    this.connection.get(ApiAddress.Minutes)
      .subscribe(response => {
          minutes = response as Minute[];
        },
        (error) => {
          this.errorHandler.handleError(error);
          // this.errorMessage = this.errorHandler.errorMessage;
        });
    return minutes;
  }
}
