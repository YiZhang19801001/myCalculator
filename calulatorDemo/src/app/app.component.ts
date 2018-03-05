import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1:number;
  num2:number;
   opt:string;
   res:any;
  constructor(){
    this.num1=0;
    this.num2=0;
    this.opt="";
    this.res="0";
  }

  public Cal(num1:HTMLInputElement,
              num2:HTMLInputElement,
              opt:HTMLInputElement)
  :void{
    try {
      this.num1=parseFloat(num1.value);
      this.num2=parseFloat(num2.value);
      
      switch(opt.innerText)
      {
        case '+':
        this.res=this.num1 + this.num2;
        break;
        
        case '-':
        this.res=this.num1 - this.num2;
        break;
  
        case '*':
        this.res=this.num1 * this.num2;
        break;
  
        case '/':
        this.res=this.num1 / this.num2;
        break;
  
        default:
        break;
      }
      console.log(this.num1,this.num2,this.res);
      if(isNaN(this.res))
      {
        throw 'NaN';
      }else if(this.res=='Infinity')
      {
        throw 'Inf';
      }

    } catch (error) {
      if(error=='NaN')
      {
        this.res="input shoud be numbers";
      }else if(error=='Inf')
      {
        this.res="number can not divide by 0";
      }
    }
  }
}
