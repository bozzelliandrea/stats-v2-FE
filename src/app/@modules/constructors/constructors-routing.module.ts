import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ConstructorsListComponent} from "./components/constructors-list/constructors-list.component";

const ConstructorsRoutes: Route[] = [{
  path: '',
  component: ConstructorsListComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(ConstructorsRoutes)],
  exports: [RouterModule]
})
export class ConstructorsRoutingModule {
}
