import { Component, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component'

@Component({
  selector: 'app-square',
  template: `

  <button class="button1 btn" [ngClass]=
  "{ 
    'defaultButton' : value == null,
    'btn-primary' : value == 'O',
    'btn-warning' : value == 'X',
    'disabled': _board.finishedGame == true}"
    >
  {{ value }} 
  </button> 
 
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
@Input() value

  constructor(public _board : BoardComponent) { }


  ngOnInit(): void {
  }

}
