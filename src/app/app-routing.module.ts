import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginGuard } from './shared/login.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'main',
    loadChildren: () => import('./main/main.module')
      .then((mod) => mod.MainModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
