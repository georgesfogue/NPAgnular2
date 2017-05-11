import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './Categories.service';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {RouterModule, Router}   from '@angular/router';
import { routes } from '../../app.routes';
import {Categorie} from "./catModel";
//import error = webdriver.error;
@Component({
  selector: 'categories', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[ CategoriesService, RouterModule ],
  templateUrl: './Categories.component.html'
})

export class CategoriesComponent implements OnInit{
  title: string;
  idcat: number;
  namecat: string;
  public categories: any[];
  public modcat = false;
  public hidden = false;
  putcatForm: FormGroup;
  msgerror: string;



  constructor(private categoriesService: CategoriesService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(){
    this.title = 'Liste de categories';
    this.putcatForm = this.formBuilder.group({
      putcategory: ['']
    });
    this.categoriesService.getCategorie().subscribe((data) => this.categories = data);

  }

  modifcat(catq: any){
    this.title = 'Modification de la Categorie';
    this.idcat = catq.id;
    this.namecat = catq.nom;
    this.modcat = true;
    this.hidden = true;
    console.log(catq.id);
  }
  dellcat(id: number){
    this.categoriesService.delCategorie(id).subscribe(data => { console.log(data) },
      err => console.log(err)
    );
    this.router.navigate(['/Categories']);
    location.reload();
  }

  putcat(id:number){
    this.title = 'Liste de categories';
    this.categoriesService.PutCategorie(this.namecat, id).subscribe(data => { console.log(data) },
      err => console.log(err)
    );
    this.router.navigate(['/Categories']);
    location.reload();
    this.modcat = false;
    this.hidden = false;
  }
}
