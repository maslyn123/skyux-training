import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bee } from '../../models/bee';

@Injectable()
export class BeeService {

  constructor(
    private http: SkyAuthHttp
  ) {}

  public getBees(): Observable<Bee[]> {
    return this.http
    .get('https://buzzbaud.curtissimo.com/v1/bees')
    .map(response => response.json())
    .map(o => o.bees);
  }

  public createBee(bee: Bee): Observable<Bee> {
    return this.http
      .post('https://buzzbaud.curtissimo.com/v1/bees', bee)
      .map(response => response.json());
  }

}
