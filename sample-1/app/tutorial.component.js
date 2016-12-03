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
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.name = 'Sylvester\'s';
        this.imageUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg';
        this.applyClass = false;
        this.applyPurple = false;
    }
    TutorialsComponent.prototype.onClick = function (value, event) {
        console.log('Button Clicked,', value, event);
    };
    TutorialsComponent.prototype.onMouseOver = function (event) {
        console.log('Moused over', event);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: "my-tutorial",
            template: "<h2>This is {{name}} tutorials</h2>\n                <h4>Header 4 from Tutorials Component</h4> <br><br>\n                <input type=\"text\" value=\"Angular\">\n                <div [class.myClass]=\"applyClass\">Apply Class</div>\n                <div [style.color]=\"applyPurple ? 'purple' : 'yellow'\">This is style binding</div>\n                <button (click)=\"onClick(demoInput.value, $event)\" (mouseover)=\"onMouseOver($event)\">Click me</button>\n                <input type=\"text\" #demoInput>\n                ",
            styles: ["h4 {\n        color: red;\n    }\n    .myClass {\n        color: green;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorial.component.js.map