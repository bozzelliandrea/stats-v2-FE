import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriversRoutingModule} from "./drivers-routing.module";
import {DriversListComponent} from "./components/drivers-list/drivers-list.component";
import {DriverDetailComponent} from "./components/driver-detail/driver-detail.component";


@NgModule({
  declarations: [DriverDetailComponent, DriversListComponent],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule {
}
