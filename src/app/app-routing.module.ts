import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
    // { path: '', redirectTo: 'login' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent},
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
