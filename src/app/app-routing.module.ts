import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ContactComponent } from './routes/contact/contact.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:"about", component : AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'counter', component : ContactComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
