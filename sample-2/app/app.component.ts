import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>

        <hr>
        <pipe-tutorial></pipe-tutorial>
        
        <hr>
        <h2>Parent App Component</h2>
        <label>Enter Parent AppComponent Value</label>
        <input type="text" [(ngModel)]="parentValue">
        <p>Value from Child Tutorial Component is {{childData}}</p>
        <io-tutorial (childEvent)="childData=$event" [parentData]="parentValue"></io-tutorial>
    `
})
export class AppComponent {
  public childData: string;
}
