// Module decorator
import { NgModule }      from '@angular/core';

// Functional imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

// Component imports
import { AppComponent }   from './app.component';
import { IOTutorialComponent } from './io-tutorial.component';
import { PipeTutorialComponent } from './pipe-tutorial.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
      AppComponent,
      IOTutorialComponent,
      PipeTutorialComponent
  ],
  bootstrap:    [ 
      AppComponent
  ]
})
export class AppModule { }
