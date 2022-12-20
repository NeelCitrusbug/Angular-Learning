import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs'
import { ValidateBirthDate } from 'src/shared/birthdate.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'practice';
  ageValueChanges!:Subscription;

  userForm!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: ['',[Validators.required,Validators.minLength(3)]],
        lastName: ['shah',[Validators.required,Validators.minLength(3)]],
        email: ['',[Validators.required,Validators.email]],
        age: [],
        birthDate:['',[ValidateBirthDate]]
      }),
      address: this.fb.group({
        street: ['',[Validators.required]],
        number: ['',[Validators.required]],
        cityName: ['', [Validators.required]],
        postal: [],
        company: []
      })
    })

    const companyFormControl:any = this.userForm.get("address.company");
    
    this.ageValueChanges != this.userForm.get("basicInfo.age")?.
    valueChanges.subscribe(age => {
      if (age > 18) {
        companyFormControl.setValidators(Validators.required);
      } else {
        companyFormControl.clearValidators();
      }
      companyFormControl.updateValueAndValidity();
    })
  }

  ngOnDestroy(): void {
    this.ageValueChanges?.unsubscribe()
  }

  onSubmit(val:any) {
    console.warn(val)
  }
}
