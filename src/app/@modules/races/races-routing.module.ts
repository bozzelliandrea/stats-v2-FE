import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RacesListComponent} from "./races-list/races-list.component";

const RacesRoutes: Route[] = [{
  path: '',
  component: RacesListComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(RacesRoutes)],
  exports: [RouterModule]
})
export class RacesRoutingModule {
}
