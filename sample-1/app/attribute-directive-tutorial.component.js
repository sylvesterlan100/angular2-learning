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
var AttributeDirectiveTutorialComponent = (function () {
    function AttributeDirectiveTutorialComponent() {
        this.title = "Attribute Directive Tutorial";
        this.cOne = true;
        this.cTwo = true;
        this.style = 'italic';
        this.size = '20px';
    }
    AttributeDirectiveTutorialComponent.prototype.toggle = function () {
        this.cTwo = !this.cTwo;
    };
    AttributeDirectiveTutorialComponent = __decorate([
        core_1.Component({
            selector: 'attribute-directive-tutorial',
            template: "\n        <h2>{{title}}</h2>\n        <p [ngClass]=\"{classOne: cOne, classTwo: cTwo}\" (click)=\"cOne = !cOne;\" [ngStyle]=\"{'font-style':style, 'font-size': size}\">\n            ngClass Paragraph\n        </p>\n        <button (click)=\"toggle()\">Toggle</button>\n    ",
            styles: ["\n        .classOne{color: yellow}\n        .classTwo{background-color: black}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AttributeDirectiveTutorialComponent);
    return AttributeDirectiveTutorialComponent;
}());
exports.AttributeDirectiveTutorialComponent = AttributeDirectiveTutorialComponent;
//# sourceMappingURL=attribute-directive-tutorial.component.js.map