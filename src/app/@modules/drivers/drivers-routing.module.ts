import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {DriversListComponent} from "./components/drivers-list/drivers-list.component";


const DriversRoutes: Route[] = [{
  path: '',
  component: DriversListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(DriversRoutes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {
}
