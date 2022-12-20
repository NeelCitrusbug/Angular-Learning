import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  users:any;
  constructor(private userService: UserService){
    this.users = userService.getUsers()
  }
}
