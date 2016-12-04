import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'io-tutorial',
    template: `
        <h2>Child Tutorials Component</h2>
        <label>Enter child tutorial value</label>
        <input type="text" #childText (keyup)="onChange(childText.value)">
        <p>Value from parent appComponent is {{parentData}}</p>
    `,
    inputs: ['parentData'],
    outputs: ['childEvent']
})

export class IOTutorialComponent {
    public parentData; string;
    childEvent = new EventEmitter<string>();
    onChange(value: string) {
        this.childEvent.emit(value);
    }
}


