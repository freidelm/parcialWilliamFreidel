import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes=[
{
  path: 'grupoa',
  component: AppComponent,
  children: [
      {
          path: '',
          loadChildren:'./grupoa/grupoa.module#GrupoadModule'
      }
  ]
},
{
  path: 'grupob',
  component: AppComponent,
  children: [
      {
          path: '',
          loadChildren:'./grupob/grupob.module#GrupobdModule'
      }
  ]
}



]
@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})
],
exports:[RouterModule],
providers:[]
}) 
export class AppRoutingModule { }
