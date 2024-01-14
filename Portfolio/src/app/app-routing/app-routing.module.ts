import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //{path: '**', component: PageNotFoundComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent}
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
