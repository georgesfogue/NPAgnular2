import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable'; //Reactive extensions for JavaScript
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Notes } from  './noteModel';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class NotesService{

  notes: Observable<Notes[]>
  private _notes: BehaviorSubject<Notes[]>;
  private baseUrl: string;
  private savedata: {notes: Notes[]};

  constructor(public http: Http){
    this.baseUrl = 'http://localhost/notepad/web/notepad/api';
    this.savedata = { notes: []};
    this._notes = <BehaviorSubject<Notes[]>> new  BehaviorSubject([]);
    this.notes = this._notes.asObservable();
  }

  Allnotes(){
    this.http.get(`${this.baseUrl}/notes`).map(response => response.json()).subscribe(data => {
      this.savedata.notes = data;
      this._notes.next(Object.assign({}, this.savedata).notes);
    },error => console.log('Ne peut pas charger les notes.'));
  }


  Getonenote(id:number) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.baseUrl}/one_note/${id}`,  headers)
        .map((res: Response) => res.json());
  }

  Onenote(id: number | string){
    this.http.get(`${this.baseUrl}/one_note/${id}`).map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.savedata.notes.forEach((item, index) => {
        if (item.idn === data.id) {
          this.savedata.notes[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.savedata.notes.push(data);
      }

      this._notes.next(Object.assign({}, this.savedata).notes);
    }, error => console.log('Ne peut pas charger la note'));
  }

  postNotes(title: string, content: string, category: string):Observable<any> {

    var body = JSON.stringify(
        {
          "title": title,
          "content": content,
          "categorie": category
        }
    );
    return this.http.post(`${this.baseUrl}/notes_post`, body, {}).map((res: Response) => res.json());
  }

  PutNote(id: number, title: string, content: string, category: string):Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = this.baseUrl+"/notes_put/" +id;

    var body = JSON.stringify(
      {
        "title": title,
        "content": content,
        "categorie": category
      }
    );
    return this.http.put(url, body, {headers: headers})
      .map(res=> res.json());
  }

  updateNote(note: Notes) {
    const note_id = note.idn;
    const url = `${this.baseUrl}/notes_put/${note_id}`;
    return this.http.patch(url, JSON.stringify(note), {})
      .map((res: Response) => res.json());
  }

  DelNote(noteId: number){
    this.http.delete(`${this.baseUrl}/notes_del/${noteId}`).subscribe(response => {
      this.savedata.notes.forEach((t, i) => {
        if (t.idn === noteId) { this.savedata.notes.splice(i, 1); }
      });

      this._notes.next(Object.assign({}, this.savedata).notes);
    }, error => console.log('La note ne peut pas etre supprimer.'));
  }

}
