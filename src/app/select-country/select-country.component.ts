import {Component, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {WeatherService} from '../weather.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent implements OnDestroy {
  selectedCountry = new FormControl('');
  countries = [
    {label: 'Russia', value: 'RU'},
    {label: 'UnitedKingdom', value: 'UK'},
    {label: 'Germany', value: 'DE'},
    {label: 'USA', value: 'US'}
  ];
  subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private weather: WeatherService) {
    weather.setCountry(this.selectedCountry.value);
    this.subscription = weather.country$.subscribe(country => {
      this.selectedCountry.setValue(country, {emitModelToViewChange: true});
    });
  }

  onCountryUpdate($event: any): void {
    this.selectedCountry.setValue(($event.currentTarget.value as string), {emitModelToViewChange: true});
    this.weather.setCountry(this.selectedCountry.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
