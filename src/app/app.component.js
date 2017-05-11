"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular NotePad';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"container-fluid\">\n    <div class=\"col-md-10\">\n    <div class=\"row\">\n      <div class=\"col-md-6\"><br><img src=\"assets/Angular.png\" alt=\"Photo de montagne\" class=\"img-rounded\"><br><br></div>\n    </div>\n    <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded-info\" style=\"background-color: #f6f7ed;\">\n            \n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/Notes\">Notes</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/Categories\" (click) = \"gotocategories\">Cat\u00E9gories</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/AddNotes\">Ajouter une Note</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/Addcategorie\">Ajouter une cat\u00E9gorie</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n      </ul>  \n      \n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-1\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-outline-success my-0 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </nav>\n    <router-outlet></router-outlet>\n    </div>\n  </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map