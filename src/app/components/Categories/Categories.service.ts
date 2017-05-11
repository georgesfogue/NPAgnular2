import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'; //Reactive extensions for JavaScript
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriesService{

  private  baseUrl = 'http://localhost/notepad/web/notepad/api/';

  constructor(public http: Http){}

  getCategorie(){
    return this.http.get(this.baseUrl + 'Categories')
    .map((res:Response) => res.json());
  }
  postCats(category: string):Observable<any> {
    var body = JSON.stringify({"categorie": category}
    );
    return this.http.post(this.baseUrl+'categorie_post', body, {})
      .map((res: Response) => res.json());
  }

  PutCategorie(category: string, catID: number){
    let body = JSON.stringify({"categorie": category});
    return this.http.put(this.baseUrl+'categorie_put/'+ catID.toString() , body, {}).map((res: Response) => res.json());
  }

  delCategorie(catId: number) {
    return this.http.delete(this.baseUrl+"Categories_del/"+ catId.toString(),{} ).map((res: Response) => res.json());
  }
}
