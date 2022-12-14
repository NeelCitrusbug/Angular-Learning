import { Injectable } from '@angular/core';
import {userDataType} from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

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
