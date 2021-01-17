import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriverDetailComponent} from './driver-detail/driver-detail.component';
import {DriversListComponent} from './drivers-list/drivers-list.component';
import {DriversRoutingModule} from "./drivers-routing.module";


@NgModule({
  declarations: [DriverDetailComponent, DriversListComponent],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule {
}
