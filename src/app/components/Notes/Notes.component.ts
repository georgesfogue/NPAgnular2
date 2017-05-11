import { Component } from '@angular/core';
import {NotesService} from "./Notes.service";
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {RouterModule, Router}   from '@angular/router';
import { Notes } from  './noteModel';
import {Observable} from 'rxjs/Observable'; //Reactive extensions for JavaScript

@Component({
  selector: 'app-notes', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[NotesService, Notes],
  templateUrl: './Notes.component.html'
})

export class NotesComponent{

  notes: Observable<Notes[]>;
  Onenote$: Observable<Notes>;
  private onnote: Notes;
  private ntId: number;
  public notput: any;
  public noteForm: FormGroup;
  public edited = false;
  public hidden = false;
  title: string;
  getData: string;
  upnotes: Notes = null;

  constructor( private noteService: NotesService, private formBuilder: FormBuilder,private router: Router){

    this.noteForm = this.formBuilder.group({
      'note': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.title = 'Liste de notes';
    this.notes = this.noteService.notes;
    this.noteService.Allnotes();
    this.noteForm = this.formBuilder.group({
      title: [''],
      content: ['']
    })
    console.log(this.notes);
  }

  deletenote(noteId: number){
    this.noteService.DelNote(noteId);
    location.reload();
    this.router.navigate(['/Notes']);
  }

  editnote(note: any){
    this.title = 'Modifier la notes';
    this.ntId = note.id;
    this.notput = note;
    console.log(this.ntId);
    this.edited = true;
    this.hidden = true;
  }

  savenot(id: number){

    var putnotes = {
      id: id,
      title: this.noteForm.controls['title'].value,
      content: this.noteForm.controls['content'].value,
      categorie: this.notput.categorie.nom
    }
    this.noteService.updateNote(this.upnotes).subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      ()=> console.log("terminer")
    );
    this.router.navigate(['/Notes']);
    location.reload();
    console.log(this.upnotes);
  }

  annuler(){
    this.router.navigate(['/Notes']);
    location.reload();
  }

}
