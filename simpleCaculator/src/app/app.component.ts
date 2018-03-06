import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1:number;
  num2:number;
  numDisplay:string;
  opt:string;
  result:any;
  OptStatus:boolean;
  len:number;

  constructor(){
    this.numDisplay="0";
    this.opt="";
    this.OptStatus=false;
  }

  public Back(){
    this.len = this.numDisplay.length -1;
    if(this.len==0)
    {
      this.numDisplay="0";
    }
    else
    {
      this.numDisplay=this.numDisplay.substring(0,this.len);
    }
  }

  public Clear(){
    this.num1=0;
    this.num2=0;
    this.opt="";
    this.numDisplay="0";
    this.OptStatus=false;
  }

  public NumPress(input:HTMLInputElement):void
  {
    if(parseFloat(this.numDisplay)==0)
    {
      this.numDisplay=input.innerText;
    }
    else{
      this.numDisplay+=input.innerText;
    }
  }

  public OptPress(input:HTMLInputElement):void
  {
    if(this.opt=="")
    {
      this.opt=input.innerText;
      this.num1=parseFloat(this.numDisplay);
      this.OptStatus=true;
      this.numDisplay="0";
    }
    else{
      this.num2 = parseFloat(this.numDisplay);
      switch (this.opt) {
        case "+":
          this.result = this.num1 + this.num2;
          break;
        
        case "-":
          this.result = this.num1 - this.num2;
          break;

        case "*":
          this.result = this.num1 * this.num2;
          break;

        case "/":
          this.result = this.num1 / this.num2;
          break;

        default:
          break;
      }
      this.numDisplay=this.result+"";
      this.opt="";
      this.OptStatus=false;
    }
  }


}
