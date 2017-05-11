import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './Categories.service';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {RouterModule, Router}   from '@angular/router';

@Component({
  selector: 'Addcategorie', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[CategoriesService],
  templateUrl: './Addcategorie.component.html'
})

export class AddCategoriesComponent{
  title = 'Ajouter une categorie';
  getData: string;
  addcatForm: FormGroup;

  constructor(private catService: CategoriesService, private formBuilder: FormBuilder , private router: Router){}
  ngOnInit(){
    this.addcatForm = this.formBuilder.group({
      newcategory: ['']
    });
  }

  savenewcat(){

    var NewCat = {
      category: this.addcatForm.controls['newcategory'].value
    }
    this.catService.postCats(NewCat.category)
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        ()=> console.log("terminer")
      );
    console.log(this.getData);
    this.router.navigate(['/Categories']);
    location.reload();
  }


}
