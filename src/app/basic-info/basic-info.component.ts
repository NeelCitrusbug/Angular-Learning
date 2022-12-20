import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit{
  @Input() formGroupName!:string;

  form!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective){}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
  
  get firstName(){
    return this.form.get('firstName')
  }
  get lastName(){
    return this.form.get('lastName')
  }
  get email(){
    return this.form.get('email')
  }
  get age(){
    return this.form.get('age')
  }
  get birthDate(){
    return this.form.get('birthDate')
  }

}
