import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanFourComponent{

  @Input() saiyan4Power;
  @Input() levelMsg4;
  constructor() { }

}
