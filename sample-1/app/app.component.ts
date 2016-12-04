import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
                <h4>Header 4 from app component</h4>
                <hr>
                <attribute-directive-tutorial></attribute-directive-tutorial>
                <hr>
                <structure-tutorial></structure-tutorial>
                <hr>
                <form-tutorial></form-tutorial>
                <hr>
                <my-tutorial></my-tutorial>
            `,
  styles: [`h4{
    color: blue
  }`]
})
export class AppComponent { }
