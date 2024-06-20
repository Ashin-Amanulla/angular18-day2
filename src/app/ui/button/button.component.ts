import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, output } from '@angular/core';

@Component({
  selector: 'my-button',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {



  @Input() text = 'Text';



}


