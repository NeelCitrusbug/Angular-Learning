import { Injectable, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // dataEmitter = new EventEmitter();
  dataEmitter = new Subject<string>();


  raisDataEmitterEvent(data:string){
    this.dataEmitter.next(data);
  }
}
