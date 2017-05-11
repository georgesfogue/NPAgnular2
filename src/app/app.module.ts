import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent }  from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routes} from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Notes } from  './components/Notes/noteModel';
import { Categorie } from  './components/Categories/catModel';


import { HttpModule } from '@angular/http';
import { NotesComponent } from './components/Notes/Notes.component';
import { CategoriesComponent } from './components/Categories/Categories.component';
import { AddCategoriesComponent } from './components/Categories/Addcategorie.component';
import { AddNotesComponent } from './components/Notes/Addnote.component';
import { AboutComponent } from './components/About/about.component';

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NotesComponent,CategoriesComponent, AddCategoriesComponent, AddNotesComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
