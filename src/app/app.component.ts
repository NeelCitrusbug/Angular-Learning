import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, from } from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice';

  // myObservable = new Observable((observer) => {
  //   setTimeout(() => {observer.next("1")},1000)
  //   setTimeout(() => {observer.next("2")},2000)
  //   setTimeout(() => {observer.next("3")},3000)
  //   // setTimeout(() => {observer.error(new Error("something went wrong!"))},3000)
  //   setTimeout(() => {observer.next("4")},4000)
  //   setTimeout(() => {observer.next("5")},5000)
  //   setTimeout(() => {observer.complete()},3000)
  // });

  // myObservable = Observable.create((observer:Observer<string>) => {
  //   setTimeout(() => {observer.next("1")},1000)
  //   setTimeout(() => {observer.next("2")},2000)
  //   setTimeout(() => {observer.next("3")},3000)
  //   // setTimeout(() => {observer.error(new Error("something went wrong!"))},3000)
  //   setTimeout(() => {observer.next("4")},4000)
  //   setTimeout(() => {observer.next("5")},5000)
  //   setTimeout(() => {observer.complete()},3000)
  // })

  array1 = [1,2,3,4,5]
  array2 = ['A','B','C','D']

  // myObservable = of(this.array1,this.array2,45,65,'rxjs')

  myObservable = from(this.array1) // 1,2,3,4,5 => 5,10,15,20,25

  transformedObs = this.myObservable.pipe(map((val) => {
    return val * 5;
  }),filter((val) => {
    return val >= 15
  }))

  // filteredObs = this.transformedObs.pipe(filter((val) => {
  //   return val >= 15
  // }))

  ngOnInit() {
    // 3 callback function params: (next,error,complete)
    this.transformedObs.subscribe((val)=>{
      console.log(val)
    },(error:any) => {
      alert(error.message)
    }, () => {
      alert('observer has complete emitting all values.')
    })
  }
}
