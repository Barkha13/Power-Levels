import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanThreeComponent {
  @Input() saiyan3Power;
  @Input() levelMsg3;
  
  constructor() { 
    
  }


}
