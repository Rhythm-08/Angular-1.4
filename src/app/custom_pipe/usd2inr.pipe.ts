import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2inr'
})
export class Usd2inrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value*price;
  }

}
