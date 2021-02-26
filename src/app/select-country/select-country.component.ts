import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent implements OnInit {
  selectedCountry = new FormControl('USA');
  countries = [
    {label: 'Russia', value: 'RU'},
    {label: 'UnitedKingdom', value: 'UK'},
    {label: 'Germany', value: 'DE'},
    {label: 'USA', value: 'USA'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  onCountryUpdate($event: any) {
    this.selectedCountry.setValue(($event.currentTarget.value as string), {emitModelToViewChange: true})
    this.router.navigate([$event.currentTarget.value])
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.router.routerState.snapshot
      console.log(routeParams)
    ;
  }


}
