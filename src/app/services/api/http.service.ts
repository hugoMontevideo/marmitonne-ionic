import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor( private http: HttpClient ) {  }

  getData( table:string, id:any=null ): Observable<any> {
    // console.log('table : ', table, id);
    if(id != null){
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readOne&id='+id);

    }else{
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readAll');
    }
  }

  deleteData( table: string, id:any ): Observable<any> {
    return this.http.post('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=delete&id='+ id, {} );
    // return this.getData(table);
  }

  postData(table:string, data:JSON ): Observable<any> {
    return this.http.post('http://localhost/ionic/marmitonne/src/app/services/api/' 
                + table + '.php?action=create', JSON.stringify(data) );
    // return this.getData(table);

  }
  
  /**
   * On récupere les ingredients d'une recette par id_recette
   * @param table ingredient
   * @param id id_recette
   * @returns 
   */
  getIngredientByIdRecipe(table:string, id:any=null): Observable<any> {

    if(id != null){
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readIngredients&id=' + id);

    }else{
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readAll');
    }

  }
   /**
   * On récupere les ingredients d'une recette par id_recette
   * @param table ingredient
   * @param id id_recette
   * @returns 
   */
   getRecipeById(table:string, id:any=null): Observable<any> {

    if(id != null){
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readOneRecipe&id=' + id);

    }else{
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readAll');
    }

  }

  /**
   * On récupere les ingredients d'une recette par id_recette
   * @param table etape
   * @param id id_recette
   * @returns 
   */
  getEtapeByIdRecipe(table:string, id:any=null): Observable<any> {

    if(id != null){
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readEtapes&id=' + id);

    }else{
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readAll');
    }

  }
  /**
 * On récupère le tableau des étapes dans l'ordre de la recette 
 * @param table = 'ordre_etape
 * @param id 
 * @returns 
 */
  getOrdreEtapeByIdRecipe(table:string, id:any): Observable<any> {
    return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readOrdre&id='+ id);
  }

}
