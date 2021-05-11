import { DIRECTIONS, OBJECT_TYPE } from './setup.js';
import { randomMovement } from './ghostmoves.js';

import Character from './Character.js';

class Ghost extends Character {
    constructor(speed = 5, startPos, movement, name) {
        super(startPos, speed);
        this.name = name;
        this.movement = movement;
        this.dir = DIRECTIONS.ArrowRight;
        this.isScared = false;
        this.rotation = false;
    }

    // Same as PacMan
    shouldMove() {
        return super.shouldMove();
    }

    getMove(objectExist) {
        // Call move algoritm here
        const { nextMovePos, direction } = this.movement(
            this.pos,
            this.dir,
            objectExist
        );
        return { nextMovePos, direction };
    }

    makeMove() {
        const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];
        let classesToAdd = [OBJECT_TYPE.GHOST, this.name];

        if (this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];

        return { classesToRemove, classesToAdd };
    }

    setNewPos(nextMovePos, direction) {
        return super.setNewPos(nextMovePos);
        this.dir = direction;
    }
}

export default Ghost;