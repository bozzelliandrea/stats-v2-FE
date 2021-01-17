import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';



@NgModule({
  declarations: [DriverDetailComponent, DriversListComponent],
  imports: [
    CommonModule
  ]
})
export class DriversModule { }
