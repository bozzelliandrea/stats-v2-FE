import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesListComponent } from './races-list/races-list.component';
import {RacesRoutingModule} from "./races-routing.module";



@NgModule({
  declarations: [RacesListComponent],
  imports: [
    CommonModule,
    RacesRoutingModule
  ]
})
export class RacesModule { }
