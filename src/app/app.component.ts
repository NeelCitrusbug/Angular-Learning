import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  
  getName(name:string){
    alert('name: ' + name)
  }

  getData(val:string){
    console.log(val)
  }
}
