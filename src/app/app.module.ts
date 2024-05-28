import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ReferencesComponent } from './references/references.component';
import { LocationComponent } from './location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ContactComponent } from './contact/contact.component';
import { SocialsComponent } from './components/socials/socials.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfessionalSkillsComponent,
    PortfolioComponent,
    EducationComponent,
    WorkExperienceComponent,
    ReferencesComponent,
    LocationComponent,
    ContactComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


