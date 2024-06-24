import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

boxs: string[] = Array(9).fill(null);
currentPlayer: string = 'x';
winner : string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  move(index:number) : void {
    if(!this.boxs[index] &&!this.winner){
      this.boxs[index] = this.currentPlayer;
      if(this.checkWinner()){
        this.winner = this.currentPlayer;

      }else {
        this.currentPlayer = this.currentPlayer === 'x'? 'o' : 'x';
      }
    }
  }

  checkWinner() : boolean {
    const combinations = [
      [0 , 1 , 2],
      [3 , 4 , 5],
      [6 , 7 , 8],
      [0 , 3 , 6],
      [1 , 4 , 7],
      [2 , 5 , 8],
      [0 , 4 , 8],
      [2 , 4 , 6]
    ]

    for(let combination of  combinations) {
      const [x, y ,z] = combination;
      if(this.boxs[x] && this.boxs[x] === this.boxs[y] && this.boxs[x] === this.boxs[z]){
        return true;
      }
    }
    return false;
  }

  reset() : void {
    this.boxs = Array(9).fill(null);
    this.currentPlayer = 'x';
    this.winner = null;
  }

}
