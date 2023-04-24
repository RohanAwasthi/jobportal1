import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmployerComponent } from './components/employer/employer.component';
import { CandidateComponent } from './components/candidate/candidate.component';
const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'registration', component: RegistrationComponent },
   {path:'employer', component:EmployerComponent},
   {path:'candidate', component:CandidateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
