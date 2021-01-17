import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {DriversListComponent} from "./drivers-list/drivers-list.component";
import {DriverDetailComponent} from "./driver-detail/driver-detail.component";


const DriversRoutes: Route[] = [{
  path: '',
  component: DriversListComponent,
  children: [
    {path: ':id', component: DriverDetailComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(DriversRoutes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {
}
