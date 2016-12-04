import { Component } from '@angular/core';

@Component({
    selector: 'structure-tutorial',
    template: `<h2>{{title}}</h2>
        <button (click)="showElement=!showElement">Toggle Element</button>
        <div *ngIf="showElement">What's up, am I here?</div>
        <br>
        <input type="text" [(ngModel)]="color">
        <ul>
            <li *ngFor="let colorItem of colors" (click)="color=colorItem">{{colorItem}}</li>
        </ul>
        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">Red color selected</div>
            <div *ngSwitchCase="'blue'">Blue color selected</div>
            <div *ngSwitchCase="'green'">Green color selected</div>
            <div *ngSwitchDefault>No color selected</div>
        </div>
    `
})

export class StructureTutorialsComponent {
    public title = 'Structural Directives Tutorials';
    public showElement = true;
    public color = 'red';
    public colors = ['red', 'blue', 'green']
}