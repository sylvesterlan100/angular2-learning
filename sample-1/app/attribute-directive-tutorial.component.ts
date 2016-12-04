import { Component } from '@angular/core';

@Component({
    selector: 'attribute-directive-tutorial',
    template: `
        <h2>{{title}}</h2>
        <p [ngClass]="{classOne: cOne, classTwo: cTwo}" (click)="cOne = !cOne;" [ngStyle]="{'font-style':style, 'font-size': size}">
            ngClass Paragraph
        </p>
        <button (click)="toggle()">Toggle</button>
    `,
    styles: [`
        .classOne{color: yellow}
        .classTwo{background-color: black}
    `]
})

export class AttributeDirectiveTutorialComponent{
    public title = "Attribute Directive Tutorial";
    public cOne = true;
    public cTwo = true;
    public style = 'italic';
    public size = '20px';

    toggle(){
        this.cTwo = !this.cTwo;
    }
}