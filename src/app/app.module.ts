import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


import { PresentationCardComponent } from './components/presentation-card/presentation-card.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { SkillTextComponent } from './components/skills-card/skill-text/skill-text.component';
import { SubscribeCardComponent } from './components/subscribe-card/subscribe-card.component';
import { LatestGuidesCardComponent } from './components/latest-guides-card/latest-guides-card.component';
import { UserMessageCardComponent } from './components/user-message-card/user-message-card.component';


const MATERIAL_MODULES = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    PresentationCardComponent,
    SkillsCardComponent,
    SkillTextComponent,
    SubscribeCardComponent,
    LatestGuidesCardComponent,
    UserMessageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
