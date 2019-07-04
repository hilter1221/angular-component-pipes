import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  student:any[]=[];

avg:number;

  printData(value)
  {
      console.log(value)
if(value.c<35 || value.cpp<35 || value.java<35)
      {
        this.avg=(value.c + value.cpp + value.java)/300;

        let x:object={grave:this.avg}          
      this.student.push (Object.assign(value,x));  
      }

 else{     
      this.avg=(value.c + value.cpp + value.java)/300;
      let x:object={grave:this.avg}
      console.log(this.avg)
      this.student.push (Object.assign(value,x));
      
 }
     }
}