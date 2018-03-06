import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nums:number[];
  numHolder?:number;

  numDisplay:string;
  opt:string;
  result:any;
  res:number;
  OptStatus:boolean;
  len:number;
  nagtive:number;
  isNew:boolean;

  constructor(){
    this.numDisplay="0";
    this.opt="";
    this.nums=[0];
    this.numHolder=null;
    this.OptStatus=false;
    this.nagtive=1;
    this.isNew=true;
    this.res=0;
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
    this.nums=[0];
    this.opt="";
    this.isNew=true;
    this.numDisplay="0";
    this.isNew=true;
    this.numHolder=null;
    this.nagtive = 1;
    this.res=0;
  }

  public NumPress(input:HTMLInputElement):void
  {
    if(this.isNew)
    {
      this.numDisplay=input.innerText;
      this.isNew=false
    }
    else if(parseFloat(this.numDisplay)==0)
    {
      this.numDisplay=input.innerText;
    }
    else{
      this.numDisplay+=input.innerText;
    }
  }

  public OptPress(input:HTMLInputElement):void
  {
    if(input.innerText=="+" || input.innerText=="-")
    {
      if(this.numHolder==null)
        {
          this.nums.push(parseFloat(this.numDisplay) * this.nagtive);
        }
        else
        {
          this.numHolder = this.Cal2(this.numHolder,parseFloat(this.numDisplay));
          this.nums.push(this.numHolder);
          this.numHolder=null;
        }
        if(input.innerText=="-"){this.nagtive = -1;}
        else{this.nagtive = 1;}
        this.numDisplay="0";
        this.opt = input.innerText;
    }
    else if(input.innerText=="*" || input.innerText=="/")
    {
      if(this.numHolder==null)
        {
          this.numHolder = parseFloat(this.numDisplay) * this.nagtive;
        }
        else
        {
          this.numHolder = this.Cal2(this.numHolder,parseFloat(this.numDisplay));
        }
        this.nagtive = 1;
        this.opt=input.innerText;
        this.numDisplay="0";
    }
    else
    {
      this.CloseBal();
      for(let item of this.nums)
      {
        this.res+=item;
      }
      
      this.numDisplay=this.res+"";
      this.numHolder=null;
      this.isNew=true;
    }
    
  }

  public Cal2(a:number,b:number):number
  {
    if(this.opt=="*")
    {
      return a * b;
    }
    else
    {
      return a / b;
    }
  }

  public CloseBal()
  {
    if(this.opt=="+"||this.opt=="-")
    {
      this.nums.push(parseFloat(this.numDisplay) * this.nagtive);
    }
    else
    {
      this.numHolder = this.Cal2(this.numHolder,parseFloat(this.numDisplay));
      this.nums.push(this.numHolder);
    }
  }

}
