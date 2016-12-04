import { Component } from '@angular/core';

@Component({
    selector: 'form-tutorial',
    template: `<h2>{{title}}</h2>
        <input type="text" [(ngModel)]="fName">
        <input type="text" [(ngModel)]="lName">
        <br>
        Full name: {{fName || '-'}} {{lName || '-'}}
    `
})

export class FormTutorialsComponent {
    public title = "Form Tutorial"
    public fName;
    public lName;
}