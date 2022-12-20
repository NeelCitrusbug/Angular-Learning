import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  users:any;

  constructor(private userService:UserService) {
    this.users = userService.getUsers();
  }

  onUpdate(val:any) {
    this.userService.updateUser(val.id,val.email)
  }
}
