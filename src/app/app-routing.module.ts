import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'about',
    children: [
      {
        path:'us',
        component:AboutUsComponent
      },
      {
        path:'company',
        component:AboutCompanyComponent
      }
    ],
    component:AboutComponent
  },
  {
    path:'**',
    component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
