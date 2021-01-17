import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorsListComponent } from './components/constructors-list/constructors-list.component';
import { ConstructorDetailComponent } from './components/constructor-detail/constructor-detail.component';



@NgModule({
  declarations: [ConstructorsListComponent, ConstructorDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ConstructorsModule { }
