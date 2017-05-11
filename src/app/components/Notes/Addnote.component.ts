import { Component, OnInit } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {CategoriesService} from "../Categories/Categories.service";
import {NotesService} from "../Notes/Notes.service";
import {RouterModule, Router}   from '@angular/router';
import { Notes } from  './noteModel';
import { routes} from '../../app.routes';

@Component({
  selector: 'addnotes', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[CategoriesService, NgbModule, NotesService],
  templateUrl: './Addnote.component.html',
})


export class AddNotesComponent implements OnInit {
  title = 'Ajouter une note';
  addForm: FormGroup;
  getData: string;
  public allcat: any[];


  constructor(private catService: CategoriesService, private formBuilder: FormBuilder, private notesService: NotesService,private router: Router){}

  ngOnInit(){

    this.catService.getCategorie().subscribe((data) => this.allcat = data);
    this.addForm = this.formBuilder.group({
      title: [''],
      content: [''],
      category: ['']
    })
  }
  savenewnote(){
    var notes = {
      title : this.addForm.controls['title'].value,
      content: this.addForm.controls['content'].value,
      category: this.addForm.controls['category'].value
    }
    this.notesService.postNotes(notes.title, notes.content, notes.category)
        .subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            ()=> console.log("terminer")
        );
    this.router.navigate(['/Notes']);
    location.reload();
    console.log(this.getData);
  }
}
