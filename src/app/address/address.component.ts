import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() formGroupName!:string;

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  form!:FormGroup;

  constructor(private rootFormGroup:FormGroupDirective){}

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  changeCity(e:any){
    this.form.get('cityName')?.setValue(e.target.value)
  }

  get street(){
    return this.form.get('street')
  }
  get number(){
    return this.form.get('number')
  }
  get postal(){
    return this.form.get('postal')
  }
  get company(){
    return this.form.get('company')
  }
  get cityName(){
    return this.form.get('cityName')
  }
}
