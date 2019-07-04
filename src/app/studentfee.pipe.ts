import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentfee'
})
export class StudentfeePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return 20000-value;
  }

}