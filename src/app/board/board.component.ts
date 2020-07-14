import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any [];
  currentPlayerO: boolean;
  winner: string;




  constructor() { }

  ngOnInit() {
    this.newGame()
  }


newGame(){
  this.squares = Array(9).fill(null);
  this.winner = null;
  this.currentPlayerO = true
}

currentPlayer(){
  return this.currentPlayerO ? "O" : "X";
}


selectSquare(index){
  if (!this.squares[index]){
    this.squares[index] = this.currentPlayer()
    this.currentPlayerO = !this.currentPlayerO
  }

}



}
