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
var Notes_service_1 = require("./Notes.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var noteModel_1 = require("./noteModel");
var NotesComponent = (function () {
    function NotesComponent(noteService, formBuilder, router) {
        this.noteService = noteService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.edited = false;
        this.hidden = false;
        this.upnotes = null;
        this.noteForm = this.formBuilder.group({
            'note': ['', forms_1.Validators.required]
        });
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.title = 'Liste de notes';
        this.notes = this.noteService.notes;
        this.noteService.Allnotes();
        this.noteForm = this.formBuilder.group({
            title: [''],
            content: ['']
        });
        console.log(this.notes);
    };
    NotesComponent.prototype.deletenote = function (noteId) {
        this.noteService.DelNote(noteId);
        location.reload();
        this.router.navigate(['/Notes']);
    };
    NotesComponent.prototype.editnote = function (note) {
        this.title = 'Modifier la notes';
        this.ntId = note.id;
        this.notput = note;
        console.log(this.ntId);
        this.edited = true;
        this.hidden = true;
    };
    NotesComponent.prototype.savenot = function (id) {
        this.title = 'Liste de notes';
        this.upnotes.idn = 4;
        this.upnotes.title = "zertyuiopl,nbvsdfghjkcvbn,sdfghjdfg";
        this.upnotes.content = "test test";
        this.upnotes.categorie = "Bricolage";
        // var putnotes = {
        //   id: id,
        //   title: this.noteForm.controls['title'].value,
        //   content: this.noteForm.controls['content'].value,
        //   categorie: this.notput.categorie.nom
        // }
        // this.noteService.updateNote(this.upnotes).subscribe(
        //   data => this.getData = JSON.stringify(data),
        //   error => alert(error),
        //   ()=> console.log("terminer")
        // );
        //this.upnotes.idn = putnotes.idt;
        //this.upnotes.title = putnotes.title;
        //this.upnotes.content = putnotes.content;
        //this.upnotes.categorie = putnotes.categorie;
        /*this.noteService.PutNote(notes.id, notes.title, notes.content, notes.categorie)
          .subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            ()=> console.log("terminer")
          );*/
        //this.router.navigate(['/Notes']);
        //location.reload();
        console.log(this.upnotes);
    };
    NotesComponent.prototype.annuler = function () {
        this.router.navigate(['/Notes']);
        location.reload();
    };
    return NotesComponent;
}());
NotesComponent = __decorate([
    core_1.Component({
        selector: 'app-notes',
        providers: [Notes_service_1.NotesService, noteModel_1.Notes],
        templateUrl: './Notes.component.html'
    }),
    __metadata("design:paramtypes", [Notes_service_1.NotesService, forms_1.FormBuilder, router_1.Router])
], NotesComponent);
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=Notes.component.js.map