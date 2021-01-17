import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {DriverDetailComponent} from "./components/driver-detail/driver-detail.component";
import {DriversListComponent} from "./components/drivers-list/drivers-list.component";


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
