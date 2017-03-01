import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import {routes} from "./app.routes";
import {Createtaskcomponent} from "./createtask/createtask.component"
import {Showtaskcomponent} from "./showtask/showtask.component"
import {} from "./detail.service"
import {DetailService} from "./detail.service";
import {Detail} from "./detail"
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), FormsModule, CommonModule ],
  declarations: [ AppComponent , Createtaskcomponent , Showtaskcomponent ],
  bootstrap:    [ AppComponent ],
  providers : [ DetailService ]
})
export class AppModule { }
