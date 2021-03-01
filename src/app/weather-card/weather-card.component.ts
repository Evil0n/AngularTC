import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnChanges {
  @Input() city = {
    city: '',
    temperature: '',
    pressure: '',
    wind: '',
    precipitation: ''
  };


  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.city = changes.city.currentValue;
  }
}
