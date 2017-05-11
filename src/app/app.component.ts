import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="container-fluid">
    <div class="col-md-10">
    <div class="row">
      <div class="col-md-6"><br><img src="assets/Angular.png" alt="Photo de montagne" class="img-rounded"><br><br></div>
    </div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded-info" style="background-color: #f6f7ed;">
            
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link" routerLink="/Notes">Notes</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/Categories" (click) = "gotocategories">Catégories</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/AddNotes">Ajouter une Note</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/Addcategorie">Ajouter une catégorie</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
      </ul>  
      
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-1" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-0 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class AppComponent  {
  name = 'Angular NotePad';
}
