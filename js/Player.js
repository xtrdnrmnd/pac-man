import { OBJECT_TYPE, DIRECTIONS, lives } from './setup.js';

import Character from './Character.js';



class Player extends Character {
  constructor(speed, startPos) {
    super(startPos, speed);
    this.dir = null;
    this.powerPill = false;
    this.rotation = true;
    // Every time Pacman collides with the ghost he loses 3 
    this.lives = 9;
  }

  // Checks if user can move
  shouldMove() {
    // if key is not pressed nothing happens
    if (!this.dir)
      return;

    return super.shouldMove();
  }

  // Get the direction
  getMove(objectExist) {
    let nextMovePos = this.pos + this.dir.movement;
    // Checks collisions
    if (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
    ) {
      nextMovePos = this.pos;
    }

    return { nextMovePos, direction: this.dir };
  }

  // Moves
  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN];
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return { classesToRemove, classesToAdd };
  }

  // Setter for the position value;
  setNewPos(nextMovePos) {
    return super.setNewPos(nextMovePos);
  }

  // Function responsible for key actions
  handleKeyInput = (e, objectExist) => {
    let dir;

    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key];
    } else { return; }
    const nextMovePos = this.pos + dir.movement;
    if (objectExist(nextMovePos, OBJECT_TYPE.WALL))
      return;
    this.dir = dir;
  };

  // Lose life function for PacMan
  looseLife() {

    this.lives -= 1;

    if (this.lives % 3 == 0) {
      lives.removeChild(lives.childNodes[0]);
    }
  }

  // Getter for the property
  getLives() {
    return this.lives;
  }

  // Function responsible for showing the lives on the screen
  displayLives() {

    for (var i = 0; i < 3; i++) {
      const div = document.createElement('div');
      div.classList.add('live');
      lives.appendChild(div);
    }
  }
}

export default Player;