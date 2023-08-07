import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recette/add',
    loadChildren: () => import('./recipe-form/recipe-form.module').then( m => m.RecipeFormPageModule)
  },
  // {
  //   path: 'recipe-form',
  //   loadChildren: () => import('./recipe-form/recipe-form.module').then( m => m.RecipeFormPageModule)
  // },
  {
    path: 'recette/list',
    loadChildren: () => import('./list-recipes/list-recipes.module').then( m => m.ListRecipesPageModule)
  },
  {
    path: 'button-detail',
    loadChildren: () => import('./button-detail/button-detail.module').then( m => m.ButtonDetailPageModule)
  },
  {
    path: 'categorie/list',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'categorie/add',
    loadChildren: () => import('./category-form/category-form.module').then( m => m.CategoryFormPageModule)
  },
  {
    path: 'etape-form',
    loadChildren: () => import('./etape-form/etape-form.module').then( m => m.EtapeFormPageModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./ingredient/ingredient.module').then( m => m.IngredientPageModule)
  },
  {
    path: 'ingredient-form',
    loadChildren: () => import('./ingredient-form/ingredient-form.module').then( m => m.IngredientFormPageModule)
  },

  {
    path: 'one-recipe',
    loadChildren: () => import('./one-recipe/one-recipe.module').then( m => m.OneRecipePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
