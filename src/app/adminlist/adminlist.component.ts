import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent {
  constructor(){
    console.warn('Admin component loaded')
  }
}
