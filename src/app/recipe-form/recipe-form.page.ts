import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';
import { NgForm } from '@angular/forms';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.page.html',
  styleUrls: ['./recipe-form.page.scss'],
})
export class RecipeFormPage implements OnInit {
  data:any
 

    
  ingredients: Array<any> = [];
  table: string = "recette";
  recette= {
    id:0,
    titre : '',
    id_categorie: '',
    description: '',
    difficulte: '',
    tempsprep: '',
    tempscuisson: '',
    cout: '',
    photo: '',
    // etapes:[]
  };
  categories!: Array<any>; // propriété de categories
  optionDifficulte: any =[
    {value: '1', label: '€' },
    {value: '2', label: '€€' },
    {value: '3', label: '€€€' },
  ]
  test :any;
  // id: string | null = '0'; // si id = 0 on est en ajout
  id:any;
  constructor(private http: HttpService, private photoService: PhotoService) { }

  ngOnInit() {
  }

  formulaire( form: NgForm ) {

    this.http.postData( "recette", form.value )
    .subscribe({
      next: (data) => console.log(data),
      error:(err)=>console.log(err),
      complete: ()=> console.log('recette ajoutée')
    })
  }

  
  addIngr(event:any){
    this.ingredients.push({
      quantite: event.quantite,
      nom: event.nom,
      unite: event.unite
    })
  }

  addPhotoToGallery() {
    this.data= this.photoService.addNewToGallery();
    console.log(this.data);
    this.ngOnInit();
 
  }


}
