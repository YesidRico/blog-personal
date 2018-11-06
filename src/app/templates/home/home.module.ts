import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { EntryCardComponent } from './home/entry-card/entry-card.component';


//ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    EntryCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...MATERIAL_MODULES
  ]
})
export class HomeModule { }
