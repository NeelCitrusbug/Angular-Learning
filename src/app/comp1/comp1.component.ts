import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  inputText = '';

  constructor(private dataSerive:DataService){}

  onclick(){
    console.warn(this.inputText);
    this.dataSerive.raisDataEmitterEvent(this.inputText)
  }
}
