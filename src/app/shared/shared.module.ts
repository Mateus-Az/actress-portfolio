import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ProjectCardComponent,
    FooterComponent
  ]
})
export class SharedModule { }
