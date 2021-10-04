import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './components/select-language/select-language.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ListContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    FormContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SelectLanguageComponent
  ],
  imports: [
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    I18nModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
