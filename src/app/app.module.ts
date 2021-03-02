import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hal2Component } from './hal2/hal2.component';
import { Hal3Component } from './hal3/hal3.component';
import { GlobarnoteService } from './globarnote.service';

const ROUTES: Routes = [
  { path: "hal2", component: Hal2Component },
  { path: "hal3", component: Hal3Component },
  
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, Hal2Component, Hal3Component ],
  bootstrap:    [ AppComponent ],
  providers: [GlobarnoteService]
})
export class AppModule { }
