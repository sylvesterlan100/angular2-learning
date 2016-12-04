// Module decorator
import { NgModule }      from '@angular/core';

// Functional imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

// Component imports
import { AppComponent }   from './app.component';
import { AttributeDirectiveTutorialComponent } from './attribute-directive-tutorial.component';
import { FormTutorialsComponent } from './form-tutorial.component';
import { StructureTutorialsComponent } from './structure-tutorial.component';
import { TutorialsComponent } from './tutorial.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  declarations: [
      AppComponent,
      AttributeDirectiveTutorialComponent,
      FormTutorialsComponent,
      StructureTutorialsComponent,
      TutorialsComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
