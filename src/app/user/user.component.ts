import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    userId:any;
    constructor(private route:ActivatedRoute){
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.userId = params['id'];
      });
      // console.warn("user id",this.route.snapshot.paramMap.get('id'));
    }
}
