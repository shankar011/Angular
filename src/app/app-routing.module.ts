import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ContactComponent } from './routes/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'counter', component: ContactComponent },

  // Lazy loaded modules
  {
    path: 'usersroute',
    loadChildren: () => import('./lazyrouting/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'ordersroute',
    loadChildren: () => import('./lazyrouting/orders/orders.module').then(m => m.OrdersModule)
  },

  
  { path: '**', redirectTo: '', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
