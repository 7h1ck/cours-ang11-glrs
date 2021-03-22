import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/core/models/categorie';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy{

  categories: Categorie[]|null=null;
  subscriotionCateg:Subscription;
  constructor(private categService:CategorieService) { }

  ngOnInit(): void {
    this.onGetAllCategories();
  }

  onGetAllCategories(){
    this.categService.getAllCategories().subscribe(
      (data)=> {
        console.log(data)
        this.categories = data;
    }
    );

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriotionCateg.unsubscribe();
  }

}
