import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  LaunchDetailsComponent
} from './components/index';
import {
  SpaceXApiService
} from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SpaceXApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
