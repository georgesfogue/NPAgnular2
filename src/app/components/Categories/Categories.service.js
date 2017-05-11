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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost/notepad/web/notepad/api/';
    }
    CategoriesService.prototype.getCategorie = function () {
        return this.http.get(this.baseUrl + 'Categories')
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.postCats = function (category) {
        var body = JSON.stringify({ "categorie": category });
        return this.http.post(this.baseUrl + 'categorie_post', body, {})
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.PutCategorie = function (category, catID) {
        var body = JSON.stringify({ "categorie": category });
        return this.http.put(this.baseUrl + 'categorie_put/' + catID.toString(), body, {}).map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.delCategorie = function (catId) {
        return this.http.delete(this.baseUrl + "Categories_del/" + catId.toString(), {}).map(function (res) { return res.json(); });
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=Categories.service.js.map