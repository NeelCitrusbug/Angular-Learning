import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  enteredText = '';

  constructor(private dataSerivce: DataService){
    this.dataSerivce.dataEmitter.subscribe((val) => {
      this.enteredText = val;
    })

  }


}
