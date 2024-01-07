import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Num1Component } from './num1/num1.component';
import { RoutesComponent } from './routes/routes.component';
import { Num2Component } from './num2/num2.component';
import { Num3Component } from './num3/num3.component';

const routes: Routes = [
  {path:'',component:RoutesComponent},
  {path:'chapter-201',component:Num1Component},
  {path:'chapter-202',component:Num2Component},
  {path:'**',component:RoutesComponent}
  
  
];{path:'chapter-203',component:Num3Component}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
