import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConstructorsListComponent} from './components/constructors-list/constructors-list.component';
import {ConstructorDetailComponent} from './components/constructor-detail/constructor-detail.component';
import {ConstructorsRoutingModule} from "./constructors-routing.module";


@NgModule({
  declarations: [ConstructorsListComponent, ConstructorDetailComponent],
  imports: [
    CommonModule,
    ConstructorsRoutingModule
  ]
})
export class ConstructorsModule {
}
