import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: '',
    id: null,
    createdAt: null
  };

  response: ResponseCreate;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }
}
