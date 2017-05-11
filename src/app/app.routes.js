"use strict";
var Notes_component_1 = require("./components/Notes/Notes.component");
var Categories_component_1 = require("./components/Categories/Categories.component");
var Addcategorie_component_1 = require("./components/Categories/Addcategorie.component");
var Addnote_component_1 = require("./components/Notes/Addnote.component");
var about_component_1 = require("./components/About/about.component");
exports.routes = [
    { path: '', redirectTo: 'Notes', pathMatch: 'full' },
    { path: 'Notes', component: Notes_component_1.NotesComponent },
    { path: 'AddNotes', component: Addnote_component_1.AddNotesComponent },
    { path: 'Categories', component: Categories_component_1.CategoriesComponent },
    { path: 'Addcategorie', component: Addcategorie_component_1.AddCategoriesComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
//# sourceMappingURL=app.routes.js.map