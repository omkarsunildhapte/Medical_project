import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Athuentication/login/login.component';
import { SingupComponent } from './Athuentication/singup/singup.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'signup', component: SingupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
