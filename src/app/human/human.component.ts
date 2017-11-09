import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HumanComponent{
  @Input() myPower;

  constructor() { }


}
