import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  power = 1;
  saiyan = 1;
  super = 1;
  saiyan2 = 1;
  saiyan3 = 1;
  saiyan4 = 1;
  message;
  // msg = '';

  onSubmit(){
    this.saiyan = this.power * 10;
    this.super  = this.power * 90;
    this.saiyan2 = this.power * 150;
    this.saiyan3 = this.power *  250;
    this.saiyan4 = this.power * 500;
    this.displayMsg(this.saiyan);
    // console.log('saiyan...',this.saiyan);
    this.displayMsg(this.super);
    // console.log('saiyan...',this.super);
    this.displayMsg(this.saiyan2);
    // console.log('saiyan...',this.saiyan2);
    this.displayMsg(this.saiyan3);
    // console.log('saiyan...',this.saiyan3);
    this.displayMsg(this.saiyan4);
  }

  displayMsg(p){
    if(p > 9000 && p <= 20000){
      this.message = 'Over 9000!';
    }
    else if(p>20000 && p <50000){
      this.message = 'SuperLative';
    }
    else if(p == 50000){
      this.message = 'You are the One!'
    }
    else{
      this.message = '';
    }
  }
  
}
