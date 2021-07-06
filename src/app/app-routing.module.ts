import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from './main/icon/icon.component';

const routes: Routes = [
  {
    path: '',
    component: IconComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
