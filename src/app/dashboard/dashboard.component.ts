import {Component, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  isLoading = false;
  cities = [];
  subscription: Subscription;

  constructor(private http: HttpClient, private router: Router, weather: WeatherService, route: ActivatedRoute) {
    this.subscription = weather.country$.subscribe(country => {
      router.navigate([country]);
      this.isLoading = true;
      this.getWeather(country);
    });
    weather.setCountry(route.snapshot.paramMap.get('country') || '');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getWeather(country: string): void {
    this.http.get(`/AngularTC/assets/${country}.json`).subscribe(result => {
      setTimeout(() => {
        this.isLoading = false;
        this.cities = (result as []);
      }, 1000);
    }, () => {
        this.isLoading = false;
        this.router.navigate(['/404']);
    });
  }
}
