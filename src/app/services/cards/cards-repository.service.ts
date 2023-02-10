import {Injectable} from '@angular/core';
import {Card} from '../../models/Card';
import {RepositoryService} from '../api/repository.service';
import {ApiAddress} from '../../helper/ApiAddress';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsRepositoryService {

  constructor(private connection: RepositoryService<Card>) {
  }

  getYellowCards(): Observable<Card[]> {
    return this.connection.get(ApiAddress.YellowCards);
  }

  getRedCards(): Observable<Card[]> {
    return this.connection.get(ApiAddress.RedCards);
  }

}
