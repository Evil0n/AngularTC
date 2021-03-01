import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WeatherService {
  private country = new Subject<string>();

  country$ = this.country.asObservable();

  setCountry(country: string): void {
    this.country.next(country);
  }
}
