import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderHandlerService {
  loader$ = new BehaviorSubject<boolean>(true);
  loaderObservable = this.loader$.asObservable();

  constructor() {
  }
}
