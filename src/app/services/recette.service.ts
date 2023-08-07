import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  recipes: Array<any> = [];
  // recipes:any = Array();

  // constructor() { }

  createRecipe( recipe: JSON ): any
  {
  //  return sessionStorage.removeItem('recipes');
    // return
    // console.log(sessionStorage.getItem('recipes'));
    if(!sessionStorage.getItem('recipes')){
      let finalRecipe = { id: 1, ...recipe };

      this.recipes.push(finalRecipe);
    
      sessionStorage.setItem('recipes', JSON.stringify(this.recipes) );
      return  'test';

    }else{

      this.recipes = JSON.parse(sessionStorage.getItem('recipes')! ) ;
      // on recupere le dernier objet de notra tableau slice(-1)
      // qui recrée un tableau avec le nombre d'entrees demandees (ici 1)
      // on accede à son indice et à sa propriete id et on incremente de 1
      let id = this.recipes.slice(-1)[0]['id']+1 ; 

      this.recipes.push({id:id, ...recipe});
      sessionStorage.setItem('recipes', JSON.stringify(this.recipes) );

      return  'test';
    }
  }

  readRecipes()
  {
    return JSON.parse(sessionStorage.getItem('recipes')!);
  }
  
  readOneRecipe(id: any )
  {
    this.recipes=JSON.parse(sessionStorage.getItem('recipes')! );
    for(let i=0; i<this.recipes.length; i++ ){
      if (this.recipes[i]['id'] == id){
        return this.recipes[i];
      }
    }
  }

  updateRecipe(recette:JSON, id:any)
  {
    this.recipes=JSON.parse(sessionStorage.getItem('recipes')! );
    for(let i=0; i<this.recipes.length; i++ ){
      if (this.recipes[i]['id'] == id){

        this.recipes[i] = {id:id, ...recette};
        sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
      }
    }
    
  }


  deleteRecipe(id:any)
  {
    // sessionStorage.setItem('recipes', JSON.stringify(this.recipes)! );
    if(this.recipes.length != 1){
      for(let i=0; i<this.recipes.length; i++ ){
        if (this.recipes[i]['id'] == id){
  
          this.recipes.splice(i,1)
          sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
  
        }
      }
    }else{
      sessionStorage.removeItem('recipes');
      this.recipes = [];

    }

  }

}
