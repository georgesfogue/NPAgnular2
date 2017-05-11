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
var core_1 = require("@angular/core");
var Categories_service_1 = require("./Categories.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
//import error = webdriver.error;
var CategoriesComponent = (function () {
    function CategoriesComponent(categoriesService, formBuilder, router) {
        this.categoriesService = categoriesService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.modcat = false;
        this.hidden = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Liste de categories';
        this.putcatForm = this.formBuilder.group({
            putcategory: ['']
        });
        this.categoriesService.getCategorie().subscribe(function (data) { return _this.categories = data; });
    };
    CategoriesComponent.prototype.modifcat = function (catq) {
        this.title = 'Modification de la Categorie';
        this.idcat = catq.id;
        this.namecat = catq.nom;
        this.modcat = true;
        this.hidden = true;
        console.log(catq.id);
    };
    CategoriesComponent.prototype.dellcat = function (id) {
        this.categoriesService.delCategorie(id).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
        this.router.navigate(['/Categories']);
        location.reload();
    };
    CategoriesComponent.prototype.putcat = function (id) {
        this.title = 'Liste de categories';
        this.categoriesService.PutCategorie(this.namecat, id).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
        this.router.navigate(['/Categories']);
        location.reload();
        this.modcat = false;
        this.hidden = false;
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    core_1.Component({
        selector: 'categories',
        providers: [Categories_service_1.CategoriesService, router_1.RouterModule],
        templateUrl: './Categories.component.html'
    }),
    __metadata("design:paramtypes", [Categories_service_1.CategoriesService, forms_1.FormBuilder, router_1.Router])
], CategoriesComponent);
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=Categories.component.js.map