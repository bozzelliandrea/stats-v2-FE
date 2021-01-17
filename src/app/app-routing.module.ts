import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConstructorDetailComponent} from "./@modules/constructors/components/constructor-detail/constructor-detail.component";
import {DriverDetailComponent} from "./@modules/drivers/components/driver-detail/driver-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'drivers',
    loadChildren: () => import('./@modules/drivers/drivers.module').then(m => m.DriversModule)
  },
  {
    path: 'drivers/:id',
    component: DriverDetailComponent
  },
  {
    path: 'constructors',
    loadChildren: () => import('./@modules/constructors/constructors.module').then(m => m.ConstructorsModule)
  },
  {
    path: 'constructors/:id',
    component: ConstructorDetailComponent
  },
  {
    path: 'races',
    loadChildren: () => import('./@modules/races/races.module').then(m => m.RacesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
