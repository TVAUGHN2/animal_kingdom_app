import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { PyramidRowComponent } from './pyramid-row/pyramid-row.component';

@NgModule({
  declarations: [
    AppComponent,
    PyramidComponent,
    PyramidRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }