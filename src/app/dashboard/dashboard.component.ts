import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  country:string|null = '';

  constructor(private route: ActivatedRoute, private router: Router) {
router.events.subscribe( (value) => {
  if (value instanceof NavigationEnd) {
    this.ngOnInit()
  }

})
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;

    // Find the product that correspond with the id provided in route.
    this.country = routeParams.get('country');
  }

}
