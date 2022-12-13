import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiPlier'
})
export class MultiPlierPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    // console.warn(args)

    // short term for getting first item of an array
    const[num] = args

    if(args?.length === 0){
      return value
    }
    return value * num;
  }

}
