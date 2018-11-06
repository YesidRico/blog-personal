import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss']
})
export class EntryCardComponent implements OnInit {

  public entradas: Array<string> = ['Angular - Rutas & Navegación', 'Angular - Componentes', 'Angular - HttpClient', 'Angular - Directivas de estructura'];

  constructor() { }

  ngOnInit() {
  }

}
