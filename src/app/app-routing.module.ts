import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'RU', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: ':country', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
