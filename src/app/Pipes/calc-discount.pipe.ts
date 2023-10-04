import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  // transform(value: number,discountNum:number=25,test:number=2): number {
    transform(value: number,discountNum:number=25): number {


    //value = 300 , discountNum = 50
    let divRes=discountNum/100;// 50/100=.5
    let mulRes=value*divRes; // 300 * .5 =150
    let subRes=value-mulRes;//300-150=150
    return subRes;//150
  }

}
