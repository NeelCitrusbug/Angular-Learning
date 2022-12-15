import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {
    // ...
  }

  getData(val:any){
      console.warn('login',val)
      localStorage.setItem('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxMDc5NTM1LCJpYXQiOjE2NzA5OTc4NDYsImp0aSI6IjI1ZjA3OTZkODQwYzQ3M2RiNmJlYzk1ZjE3Zjg4N2Q0IiwidXNlcl9pZCI6M30.RFlCZPwZd4IA2gPRFRaSSRoRyAqrY7-ZN8twiwe2jUc')
      val['email']?.includes('admin')?localStorage.setItem('userType','admin'):localStorage.setItem('userType','employee')
      this.router.navigate(['main/dashboard'])
  }
}
