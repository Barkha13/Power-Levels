import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanTwoComponent{
  @Input() saiyan2Power;
  @Input() levelss;
  
  constructor() { 
    
  }


}
