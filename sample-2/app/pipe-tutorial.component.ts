import { Component } from '@angular/core';

@Component({
    selector: 'pipe-tutorial',
    template: `
        <h2>{{name}}</h2>
        <h2>{{name | uppercase}}</h2>
        <h2>{{name | lowercase}}</h2>
        <h2>{{name | slice: '2': '6'}}</h2>
    `
})

export class PipeTutorialComponent {
    public name:string = "Sylvester";
}