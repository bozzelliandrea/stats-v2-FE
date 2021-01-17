import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ConstructorDetailComponent} from "./components/constructor-detail/constructor-detail.component";
import {ConstructorsListComponent} from "./components/constructors-list/constructors-list.component";

const ConstructorsRoutes: Route[] = [{
  path: '',
  component: ConstructorsListComponent,
  children: [
    {path: ':id', component: ConstructorDetailComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(ConstructorsRoutes)],
  exports: [RouterModule]
})
export class ConstructorsRoutingModule {
}
