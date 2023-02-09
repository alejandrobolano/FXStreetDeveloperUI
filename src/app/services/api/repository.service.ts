import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvironmentUrlService} from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService<T> {

  constructor(private http: HttpClient,
              private environmentUrlService: EnvironmentUrlService) {
  }

  //ToDo Can be create Delete and Update
  public get = (route: string) => {
    return this.http.get<T[]>(this.createCompleteRoute(route, this.environmentUrlService.urlAddress));
  }

  public add = (route: string, t: T) => {
    return this.http.post<T>(this.createCompleteRoute(route, this.environmentUrlService.urlAddress), t, this.generateHeaders());
  }


  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
