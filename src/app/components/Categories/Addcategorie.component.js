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
var AddCategoriesComponent = (function () {
    function AddCategoriesComponent(catService, formBuilder, router) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.title = 'Ajouter une categorie';
    }
    AddCategoriesComponent.prototype.ngOnInit = function () {
        this.addcatForm = this.formBuilder.group({
            newcategory: ['']
        });
    };
    AddCategoriesComponent.prototype.savenewcat = function () {
        var _this = this;
        var NewCat = {
            category: this.addcatForm.controls['newcategory'].value
        };
        this.catService.postCats(NewCat.category)
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("terminer"); });
        console.log(this.getData);
        this.router.navigate(['/Categories']);
        location.reload();
    };
    return AddCategoriesComponent;
}());
AddCategoriesComponent = __decorate([
    core_1.Component({
        selector: 'Addcategorie',
        providers: [Categories_service_1.CategoriesService],
        templateUrl: './Addcategorie.component.html'
    }),
    __metadata("design:paramtypes", [Categories_service_1.CategoriesService, forms_1.FormBuilder, router_1.Router])
], AddCategoriesComponent);
exports.AddCategoriesComponent = AddCategoriesComponent;
//# sourceMappingURL=Addcategorie.component.js.map