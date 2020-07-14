import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `

  <button class="button1 btn" [ngClass]=
  "{'btn-primary' : value == 'O',
    'btn-warning' : value == 'X' }">
  {{ value }} 
  </button> 
 
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
@Input() value

  constructor() { }


  ngOnInit(): void {
  }

}
