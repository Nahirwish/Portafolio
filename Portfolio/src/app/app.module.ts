import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LogoComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
