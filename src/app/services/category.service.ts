import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Array<any>  = [];
  // constructor() { }

  readCategories()
  {
      return JSON.parse(sessionStorage.getItem('categories')!);
  }

  readOneCategory(id: any )
  {
    this.categories = JSON.parse(sessionStorage.getItem('recipes')! );
    for(let i=0; i < this.categories.length ; i++ ){
      if (this.categories[i]['id'] == id){
        return this.categories[i];
      }
    }
  }

  createCategory( categorie: JSON ): any
  {
    if(!sessionStorage.getItem('categories')){
      let finalCategory = { id: 1, ...categorie };

      this.categories.push(finalCategory);
    
      sessionStorage.setItem('categories', JSON.stringify(this.categories) );
      return  'test';

    }else{

      this.categories = JSON.parse(sessionStorage.getItem('categories')! ) ;
      // on recupere le dernier objet de notra tableau slice(-1)
      // qui recrée un tableau avec le nombre d'entrees demandees (ici 1)
      // on accede à son indice et à sa propriete id et on incremente de 1
      let id = this.categories.slice(-1)[0]['id']+1 ; 
      // console.log(id); 
      this.categories.push({id:id, ...categorie});
      sessionStorage.setItem('categories', JSON.stringify(this.categories) );

      return  'test';
    }
  }

  updateCategory( categorie: JSON, id: any){
    this.categories = JSON.parse(sessionStorage.getItem('categories')! );
    for(let i=0; i<this.categories.length; i++ ){
      if (this.categories[i]['id'] == id){

        this.categories[i] = {id:id, ...categorie};
  console.log(this.categories)
        sessionStorage.setItem('categories', JSON.stringify(this.categories));
      }
    }
    return  'test';

  }

  deleteCategory(id:any)
  {
    this.categories = JSON.parse(sessionStorage.getItem('categories')! );
  //  console.log(this.categories);

    if(this.categories.length != 1){
      for(let i=0; i<this.categories.length; i++ ){
        if (this.categories[i]['id'] == id){
  
          this.categories.splice(i,1)
          sessionStorage.setItem('categories', JSON.stringify(this.categories));
  
        }
      }
    }else{
      sessionStorage.removeItem('categories');
      this.categories = [];

    }

  }


}
