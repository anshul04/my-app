import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { StartersComponent } from './starters/starters.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { DesertComponent } from './desert/desert.component';


const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'user-home', component : LoginHomeComponent},
  { path : 'user-home/starters', component : StartersComponent},
  { path : 'user-home/main-course', component : MainCourseComponent},
  { path : 'user-home/desert', component : DesertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
