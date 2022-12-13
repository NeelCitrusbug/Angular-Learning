import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  reactiveForm = new FormGroup({
    user:new FormControl('',[Validators.required, Validators.pattern('[a-zA-z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  onSubmit(){
    console.warn(this.reactiveForm.value)
  }

  get user(){
    return this.reactiveForm.get('user')
  }

  get password(){
    return this.reactiveForm.get('password')
  }
}
