import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alltasks';

  user = {
    name:'John',
    age :30,
    email:"john123@gmail.com"
  };

}
