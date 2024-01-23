import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //{path: '**', component: PageNotFoundComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'portfolio', component: PortfolioComponent}
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
