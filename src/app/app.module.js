"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var Notes_component_1 = require("./components/Notes/Notes.component");
var Categories_component_1 = require("./components/Categories/Categories.component");
var Addcategorie_component_1 = require("./components/Categories/Addcategorie.component");
var Addnote_component_1 = require("./components/Notes/Addnote.component");
var about_component_1 = require("./components/About/about.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [ng_bootstrap_1.NgbModule.forRoot(), platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.routes)],
        declarations: [app_component_1.AppComponent, Notes_component_1.NotesComponent, Categories_component_1.CategoriesComponent, Addcategorie_component_1.AddCategoriesComponent, Addnote_component_1.AddNotesComponent, about_component_1.AboutComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map