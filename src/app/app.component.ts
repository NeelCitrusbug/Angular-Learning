import { Component } from '@angular/core';
import {userDataType} from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  getData(){
    const data:userDataType = {
      name:'neel',
      married:false,
      id:1,
      address:'ahmedabad'
    }
    return data;
  }
}
