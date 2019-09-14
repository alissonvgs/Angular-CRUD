import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/service/user.service';
import { ResponseUsers } from './model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => this.responseUsers = res);
  }

}
