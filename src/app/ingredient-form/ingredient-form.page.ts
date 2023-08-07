import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.page.html',
  styleUrls: ['./ingredient-form.page.scss'],
})
export class IngredientFormPage implements OnInit {

  constructor() { }

  
  ingredient: any;
  @Output() ingrEvent = new EventEmitter();

  addIngredient(unite:any, quantite:any, nom:any):void {
    this.ingredient.nom = nom;
    this.ingredient.quantite = quantite;
    this.ingredient.unite = unite;
  }
  
  
  ngOnInit() {
  }
  
}