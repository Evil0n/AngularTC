import {Component, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnDestroy {
  subscription: Subscription;

  constructor(weather: WeatherService, router: Router) {
    weather.setCountry('');

    this.subscription = weather.country$.subscribe(country => {
      router.navigate([country]);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
