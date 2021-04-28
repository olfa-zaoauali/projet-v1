import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegistreComponent } from './registre/registre.component';

const routes: Routes = [
  {
    path:'', 
    component:HomeComponent

  }, 
  {
    path:'login', 
    component:LoginComponent
  }, 
  {
    path:'registre', 
    component:RegistreComponent

  },
  {
    path:'people-list', 
    component:PeopleListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
