import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SaiyanComponent{

  @Input() saiyanPower;
  @Input() levelMsg;
  constructor() { }

}
