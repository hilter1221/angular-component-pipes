import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentgrade'
})
export class StudentgradePipe implements PipeTransform {

  transform(value: any, args?: any): any {
 if(value>=0 && value===0.60)
 {
   return "fail"
 }
 
 else{
    if(value>=0.35  && value<0.60)
    {
          return "Grade is C"
    }

    if(value>=0.60 && value<0.80)
    {
          return "Grade is B"
    }

    if(value>=0.80 && value<100)
    {
          return "Grade is A"
    }
  }
}
  

}