import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';




@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    FormContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SelectLanguageComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    I18nModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
