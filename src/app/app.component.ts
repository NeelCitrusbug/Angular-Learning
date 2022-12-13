import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning About Pipes';
  today = Date();
  user = {
    'name':'neel',
    'number':123123
  }
}
