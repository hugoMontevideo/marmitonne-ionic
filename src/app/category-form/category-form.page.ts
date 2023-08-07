import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.page.html',
  styleUrls: ['./category-form.page.scss'],
})
export class CategoryFormPage implements OnInit {
  table: string = "categorie";
  id: string | null = '0';
  category = {  
                id: 0,
                titre : ''
              }

  constructor( private http: HttpService) { }

  ngOnInit() {
  }

  formulaire1( form: NgForm ) {

    // console.log('hellow')

    this.http.postData( "categorie", form.value )
    .subscribe({
      next: (data) => console.log(data),
      error:(err)=>console.log(err),
      complete: ()=> console.log('recette ajoutée')
    })
  }

}
