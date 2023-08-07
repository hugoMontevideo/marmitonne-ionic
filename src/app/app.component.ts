import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: './', icon: 'home' },
    { title: 'Ajouter Recette', url: './recette/add', icon: 'restaurant' },
    { title: 'Liste Recettes', url: '/recette/list', icon: 'receipt' },
    { title: 'Liste Catégories', url: '/categorie/list', icon: 'document-text' },
    { title: 'Ajouter Catégorie', url: '/categorie/add', icon: 'fish' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
