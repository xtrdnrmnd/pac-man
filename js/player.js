import { OBJECT_TYPE, DIRECTIONS } from './setup.js';

class Player {
    constructor(speed, startPosx, startPosy) {
        this.posx = startPosx;
        this.posy = startPosy;
        this.speed = speed;
        this.dir = null;
        this.timer = 0;
        this.powerFill = false;
        this.rotation = true;
    }

    // Checks if Pacman is supposed to move
    shouldMove() {
        if (!this.dir) return false;

        if (this.timer == this.speed) {
            this.timer = 0;
            return true;
        }

        this.timer++;
    }

    // Next move of Pacman
    getNextMove(objectExist) {
        let nextMovePosx = this.posx + this.dir.movement;
        let nextMovePosy = this.posy + this.dir.movement;

        if (objectExist(nextMovePosx, nextMovePosy, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GH_AREA)) {
            nextMovePosx = this.posx;
            nextMovePosy = this.posy;
        }

        return { nextMovePos, direction: this.dir };
    }

    // If we get the next move 
    // Removes classes when movement is done
    makeMove() {
        // Pacman is removed from the previous position 
        const classesToRemove = [OBJECT_TYPE.PACMAN];
        // And is added in the new position
        const classesToAdd = [OBJECT_TYPE.PACMAN];

        return { classesToRemove, classesToAdd };
    }

    setNewPos(nextMovePosx, nextMovePosy) {
        this.posx = nextMovePosx;
        this.posy = nextMovePosy;
    }

    // Handles user keyboard actions
    handleKeyInput(e, objectExist) {
        console.log(e);
        let dir;

        if (e.keyCode >= 37 && e.keyCode <= 40) {
            dir = DIRECTIONS[e.key];
        } else {
            return;
        }

        // Checking if there is no wall
        const nextMovePosx = this.posx + dir.movement;
        const nextMovePosy = this.posy + dir.movement;
        if (objectExist(nextMovePosx, nextMovePosy, OBJECT_TYPE.WALL)) return;
        this.dir = dir;
    }
}

// Export class
export default Player;