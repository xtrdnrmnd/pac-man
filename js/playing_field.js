import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup.js'

var START_POSX = 360; // Start of the grid x
var START_POSY = 10; // Start of the grid y
var cnv = document.getElementById("gameField");
var ctx = cnv.getContext("2d");
var stpx = START_POSX;
var stpy = START_POSX;
var count = 0;

class GameField {
    constructor(DOMGrid) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid; // to be able to access the instance
    }

    // Displaying if the game is over or won
    showGameStatus(GameWin) {
        const div = document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML = '${gameWin ? "Win" : "Game over"}';
        this.DOMGrid.appendChild(div); // Add the div element to the DOM structures
    }

    createGrid(grid) {
        this.dotCount = 0; // Every time the game is started the dot count is set to zero
        this.grid = [];
        this.DOMGrid.innerHTML = '';
        this.DOMGrid.style.cssText = 'grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px)';

        grid.forEach((square) => { // loop through the each element in the array 
            if (count % 28 != 0) {
                if (square == 1) {
                    ctx.strokeStyle = "#FF0000";
                    ctx.lineWidth = "4";
                    ctx.beginPath();
                    ctx.rect(stpx, START_POSY, GRID_SIZE, GRID_SIZE);
                    ctx.stroke();
                }
                if (square == 0) {
                    ctx.strokeStyle = "white";
                    ctx.beginPath();
                    ctx.arc(stpx + 12, START_POSY + 12, 1, 0, 2 * Math.PI);
                    ctx.stroke();
                }
                if (square == 9) {
                    ctx.strokeStyle = "#FFFF00";
                    ctx.beginPath();

                    ctx.arc(stpx + 12, START_POSY + 12, 4, 0, 2 * Math.PI);
                    ctx.stroke();
                }
            }
            else {
                START_POSY += GRID_SIZE;
                stpx = START_POSX;
                if (square == 1) {
                    ctx.strokeStyle = "#FF0000";
                    ctx.lineWidth = "5";
                    ctx.beginPath();
                    ctx.rect(stpx, START_POSY, GRID_SIZE, GRID_SIZE);
                    ctx.stroke();
                }
                if (square == 0) {
                    ctx.strokeStyle = "white";
                    ctx.beginPath();
                    ctx.arc(stpx + 12, START_POSY + 12, 1, 0, 2 * Math.PI);
                    ctx.stroke();
                }
            }
            stpx += GRID_SIZE;
            count++;


            const rect = document.createElement('rect'); // create a new div on each element
            rect.classList.add('square', CLASS_LIST[square]); // make it a square
            rect.style.cssText = 'width: ${CELL_SIZE}px; heigth: ${CELL_SIZE}px;';
            this.DOMGrid.appendChild(rect);
            this.grid.push(rect); // add to the grid array

            //Checking if the current position has the dot, and if so adding +1 to the dot count var
            if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
        });
    }

    //Method to add classes or objects
    addObject(pos, classes) {
        this.grid[pos].classList.add(...classes);
    }

    // Same for removing
    removeObject(pos, classes) {
        this.grid[pos].classList.remove(...classes);
    }

    //Checking if the certain class exists in the certain position
    objectExist(pos, object) {
        return this.grid[pos].classList.contains(object);
    }

    // Rotate Pacman on the grid
    rotateDiv(pos, deg) {
        this.grid[pos].style.transform = 'rotate(${deg}deg)';
    }

    // use for initializing the class(create instance of the class)
    static createGameField(DOMGrid, level) {
        const board = new this(DOMGrid);
        board.createGrid(level);
        return board;
    }

    // Method to move the characters
}

// To use "import" we need to export the class 
export default GameField;