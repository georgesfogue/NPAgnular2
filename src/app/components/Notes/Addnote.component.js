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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var Categories_service_1 = require("../Categories/Categories.service");
var Notes_service_1 = require("../Notes/Notes.service");
var router_1 = require("@angular/router");
var AddNotesComponent = (function () {
    function AddNotesComponent(catService, formBuilder, notesService, router) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.notesService = notesService;
        this.router = router;
        this.title = 'Ajouter une note';
    }
    AddNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catService.getCategorie().subscribe(function (data) { return _this.allcat = data; });
        this.addForm = this.formBuilder.group({
            title: [''],
            content: [''],
            category: ['']
        });
    };
    AddNotesComponent.prototype.savenewnote = function () {
        var _this = this;
        var notes = {
            title: this.addForm.controls['title'].value,
            content: this.addForm.controls['content'].value,
            category: this.addForm.controls['category'].value
        };
        this.notesService.postNotes(notes.title, notes.content, notes.category)
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("terminer"); });
        this.router.navigate(['/Notes']);
        location.reload();
        console.log(this.getData);
    };
    return AddNotesComponent;
}());
AddNotesComponent = __decorate([
    core_1.Component({
        selector: 'addnotes',
        providers: [Categories_service_1.CategoriesService, ng_bootstrap_1.NgbModule, Notes_service_1.NotesService],
        templateUrl: './Addnote.component.html',
    }),
    __metadata("design:paramtypes", [Categories_service_1.CategoriesService, forms_1.FormBuilder, Notes_service_1.NotesService, router_1.Router])
], AddNotesComponent);
exports.AddNotesComponent = AddNotesComponent;
//# sourceMappingURL=Addnote.component.js.map