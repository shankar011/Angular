import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users = [

    {
      name:"John Doe",
      email:"johndoe@example.com",
      registrationDate: new Date('2024-01-12')
    },
    {
      name: 'Jane Smith',
      email: 'janesmith123456789@example.com',
      registrationDate: new Date('2023-05-25')
    },
    {
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      registrationDate: new Date('2022-07-04')
    }

  ]

}
