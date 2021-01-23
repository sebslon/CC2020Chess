import board from '../board';

abstract class Piece {
    display: string;

    constructor(public x: number, public y: number, protected side: string) {
        this.x = x;
        this.y = y;
        this.side! = side; //'black' or 'white'
        this.display = '';
    }
    //id to tablica z kliknieta pozycja na ktra pionek ma sie poruszyc  
    move(id: string) {
        const newX = Number(id[0]);
        const newY = Number(id[2]);

        //clearing previous place
        board[this.x][this.y] = null;
        (document.getElementById(`${this.x},${this.y}`) as HTMLDivElement).innerHTML = '';
        // debugger
        //setting new
        this.x = newX;
        this.y = newY;
        board[this.x][this.y] = this;
        (document.getElementById(id) as HTMLDivElement).innerHTML = this.display;
    }

    findLegalMoves(): any { 
        return [];
    }
}

export default Piece;
