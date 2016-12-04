"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var StructureTutorialsComponent = (function () {
    function StructureTutorialsComponent() {
        this.title = 'Structural Directives Tutorials';
        this.showElement = true;
        this.color = 'red';
        this.colors = ['red', 'blue', 'green'];
    }
    StructureTutorialsComponent = __decorate([
        core_1.Component({
            selector: 'structure-tutorial',
            template: "<h2>{{title}}</h2>\n        <button (click)=\"showElement=!showElement\">Toggle Element</button>\n        <div *ngIf=\"showElement\">What's up, am I here?</div>\n        <br>\n        <input type=\"text\" [(ngModel)]=\"color\">\n        <ul>\n            <li *ngFor=\"let colorItem of colors\" (click)=\"color=colorItem\">{{colorItem}}</li>\n        </ul>\n        <div [ngSwitch]=\"color\">\n            <div *ngSwitchCase=\"'red'\">Red color selected</div>\n            <div *ngSwitchCase=\"'blue'\">Blue color selected</div>\n            <div *ngSwitchCase=\"'green'\">Green color selected</div>\n            <div *ngSwitchDefault>No color selected</div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], StructureTutorialsComponent);
    return StructureTutorialsComponent;
}());
exports.StructureTutorialsComponent = StructureTutorialsComponent;
//# sourceMappingURL=structure-tutorial.component.js.map