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
var http_1 = require("@angular/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var NotesService = (function () {
    function NotesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost/notepad/web/notepad/api';
        this.savedata = { notes: [] };
        this._notes = new BehaviorSubject_1.BehaviorSubject([]);
        this.notes = this._notes.asObservable();
    }
    NotesService.prototype.Allnotes = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/notes").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.savedata.notes = data;
            _this._notes.next(Object.assign({}, _this.savedata).notes);
        }, function (error) { return console.log('Ne peut pas charger les notes.'); });
    };
    NotesService.prototype.Getonenote = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + "/one_note/" + id, headers)
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.Onenote = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/one_note/" + id).map(function (response) { return response.json(); }).subscribe(function (data) {
            var notFound = true;
            _this.savedata.notes.forEach(function (item, index) {
                if (item.idn === data.id) {
                    _this.savedata.notes[index] = data;
                    notFound = false;
                }
            });
            if (notFound) {
                _this.savedata.notes.push(data);
            }
            _this._notes.next(Object.assign({}, _this.savedata).notes);
        }, function (error) { return console.log('Ne peut pas charger la note'); });
    };
    NotesService.prototype.postNotes = function (title, content, category) {
        var body = JSON.stringify({
            "title": title,
            "content": content,
            "categorie": category
        });
        return this.http.post(this.baseUrl + "/notes_post", body, {}).map(function (res) { return res.json(); });
    };
    NotesService.prototype.PutNote = function (id, title, content, category) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.baseUrl + "/notes_put/" + id;
        var body = JSON.stringify({
            "title": title,
            "content": content,
            "categorie": category
        });
        return this.http.put(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.updateNote = function (note) {
        var note_id = note.idn;
        var url = this.baseUrl + "/notes_put/" + note_id;
        return this.http.patch(url, JSON.stringify(note), {})
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.DelNote = function (noteId) {
        var _this = this;
        this.http.delete(this.baseUrl + "/notes_del/" + noteId).subscribe(function (response) {
            _this.savedata.notes.forEach(function (t, i) {
                if (t.idn === noteId) {
                    _this.savedata.notes.splice(i, 1);
                }
            });
            _this._notes.next(Object.assign({}, _this.savedata).notes);
        }, function (error) { return console.log('La note ne peut pas etre supprimer.'); });
    };
    return NotesService;
}());
NotesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=Notes.service.js.map