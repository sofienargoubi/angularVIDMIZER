import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [


  { path: '', component: HomeComponent,  canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent  ,pathMatch: 'full'},
  {path: 'register', component: RegisterComponent },

  {path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
