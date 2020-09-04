import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ComponenteComponent } from './componente/componente.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


const routes : Routes=[
 // {path: '/', component: AppComponent},
  {path: '/', component: ComponenteComponent},
  {path:'/home', component: BienvenidoComponent},
  {path:'/login', component: LoginComponent},
  {path:'**', component: ErrorComponent },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
