import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/Notes/Notes.component';
import { CategoriesComponent } from './components/Categories/Categories.component';
import { AddCategoriesComponent } from './components/Categories/Addcategorie.component';
import { AddNotesComponent } from './components/Notes/Addnote.component';
import { AboutComponent } from './components/About/about.component';
import { RouterModule }   from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'Notes', pathMatch: 'full' },
  { path: 'Notes', component: NotesComponent },
  { path: 'AddNotes', component: AddNotesComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'Addcategorie', component: AddCategoriesComponent },
  { path: 'about', component: AboutComponent }
];
