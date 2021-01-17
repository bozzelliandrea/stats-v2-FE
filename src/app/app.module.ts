import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ConstructorImagePathPipe} from "./@shared/pipes/constructor-image-path.pipe";
import {FlagPipe} from "./@shared/pipes/flag.pipe";
import {DriverPipe} from "./@shared/pipes/driver.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ConstructorImagePathPipe,
    FlagPipe,
    DriverPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [ConstructorImagePathPipe,
    FlagPipe,
    DriverPipe],
  providers: [ConstructorImagePathPipe,
    FlagPipe,
    DriverPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
