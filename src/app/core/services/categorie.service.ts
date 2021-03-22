import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }


  getAllCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${environment.host}/categories`)
  }
}
