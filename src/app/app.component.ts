import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  users=[
    {name:'Neel',phone:'1111',email:'neel@test.com',accounts:['facebook','gmail','linkedin']},
    {name:'Krupal',phone:'2222',email:'krupal@test.com',accounts:['Youtube','yahoo','linkedin']},
    {name:'Sandeep',phone:'3333',email:'sandeep@test.com',accounts:['Yahoo','insta','linkedin']},
    {name:'Kishan',phone:'2299',email:'kishan@test.com',accounts:['Gmail','gmail','youtube']},

  ]
}
