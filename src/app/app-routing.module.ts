import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./@shared/components/dashboard/dashboard.component";

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {path: 'drivers', loadChildren: () => import('./@modules/drivers/drivers.module').then(m => m.DriversModule)},
    {
      path: 'constructors',
      loadChildren: () => import('./@modules/constructors/constructors.module').then(m => m.ConstructorsModule)
    },
    {path: 'races', loadChildren: () => import('./@modules/races/races.module').then(m => m.RacesModule)},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
