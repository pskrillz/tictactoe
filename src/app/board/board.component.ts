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
  finishedGame = false;
  playerOscore = 0;
  playerXscore = 0;



  constructor() { }

  ngOnInit() {
    this.newGame()
  }


newGame(){
  this.squares = Array(9).fill(null);
  this.winner = null;
  this.currentPlayerO = true
  this.finishedGame = false;
}

currentPlayer(){
  return this.currentPlayerO ? "O" : "X";
}

getLastPlayer(){
  return this.currentPlayerO ? "X" : "O";
}

selectSquare(index){
  if (!this.squares[index]){
    this.squares[index] = this.currentPlayer()
    this.currentPlayerO = !this.currentPlayerO
    this.checkWin()
  }
  

}




checkWin(){
  let winningPositions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [6, 7, 8],
    [3, 4, 5],
    [2, 4, 6]
  ]
    for (let i = 0; i < winningPositions.length; i++){
      const [a, b, c] = winningPositions[i]
      if (this.squares[a] && 
        this.squares[b] == this.squares[a] &&
         this.squares[c] == this.squares[a])
      {
        
        this.finishedGame = true
            if (this.currentPlayerO == true){
              this.playerXscore += 1
            } else if (this.currentPlayerO == false){
              this.playerOscore += 1
            }
            return [this.squares[a], this.squares[b], this.squares[c]]
        
      } else {
        console.log("game unfinished")
      }
    }

}








}
