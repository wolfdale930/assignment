import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    MatRadioModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class PagesModule { }
