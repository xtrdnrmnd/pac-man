import { DIRECTIONS, OBJECT_TYPE } from './setup.js';

// Parent class containing the main logic
class Character {
    constructor(startPos, speed) {
        this.startPos = startPos;
        this.pos = startPos;
        this.speed = speed;
        this.timer = 0;
    }

    shouldMove() {
        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }

    setNewPos(nextMovePos) {
        this.pos = nextMovePos;
    }
}

export default Character