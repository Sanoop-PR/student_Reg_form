import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewAllComponent } from './view-all/view-all.component';

const routes: Routes = [
  {
    path:'',component:RegistrationComponent
  },
  {
    path:'view-all',component:ViewAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
