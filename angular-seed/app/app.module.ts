// Module decorator
import { NgModule }      from '@angular/core';

// Functional imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

// Component imports
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap:    [ 
      AppComponent
  ]
})
export class AppModule { }
