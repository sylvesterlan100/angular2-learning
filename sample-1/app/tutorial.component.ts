import { Component } from '@angular/core';

@Component({
    selector: "my-tutorial",
    template: `<h2>This is {{name}} tutorials</h2>
                <h4>Header 4 from Tutorials Component</h4> <br><br>
                <input type="text" value="Angular">
                <div [class.myClass]="applyClass">Apply Class</div>
                <div [style.color]="applyPurple ? 'purple' : 'yellow'">This is style binding</div>
                <button (click)="onClick(demoInput.value, $event)" (mouseover)="onMouseOver($event)">Click me</button>
                <input type="text" #demoInput>
                `,
    styles: [`h4 {
        color: red;
    }
    .myClass {
        color: green;
    }
    `]
})

export class TutorialsComponent {
    public name = 'Sylvester\'s';
    public imageUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg';
    public applyClass = false;
    public applyPurple = false;
    onClick(value, event){
        console.log('Button Clicked,', value, event);
    }
    onMouseOver(event) {
        console.log('Moused over', event)
    }
}