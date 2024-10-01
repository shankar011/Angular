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
import { UsersListComponent } from './pipes/users-list/users-list.component';
import { TruncateEmailPipe } from './pipes/truncate-email.pipe';
import { HighlightDirective } from './customdirective/highlight.directive';
import { TaskManagerComponent } from './crud/task-manager/task-manager.component';
import { TaskService } from './task.service';
import { ProductsListComponent } from './pagination/products-list/products-list.component';
import { SimpleDatePickerComponent } from './datepicker/shared/simple-date-picker/simple-date-picker.component';
import { SimpleFormComponent } from './datepicker/forms/simple-form/simple-form.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {MatProgressBarModule} from'@angular/material/progress-bar'

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
    ChildComponent,
    UsersListComponent,
    TruncateEmailPipe,
    HighlightDirective,
    TaskManagerComponent,
    ProductsListComponent,
    SimpleDatePickerComponent,
    SimpleFormComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
