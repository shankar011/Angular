import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ContactComponent } from './routes/contact/contact.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CounterComponent } from './counter/counter.component';
import { ParentComponent } from './parentchild/parent/parent.component';
import { ChildComponent } from './parentchild/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    RegistrationFormComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostsListComponent,
    CounterComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
