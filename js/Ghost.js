import { DIRECTIONS, OBJECT_TYPE } from './setup.js';


import Character from './Character.js';

class Ghost extends Character {
    constructor(speed = 5, startPos, name) {
        super(startPos, speed);
        this.name = name;
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
        const { nextMovePos, direction } = this.randomMovement(
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

    randomMovement(position, direction, objectExist) {
        let dir = direction;
        let nextMovePos = position + dir.movement;
        const keys = Object.keys(DIRECTIONS);

        while (
            objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
            objectExist(nextMovePos, OBJECT_TYPE.GHOST)
        ) {
            // Get a random key from that array
            const key = keys[Math.floor(Math.random() * keys.length)];
            // Set the new direction
            dir = DIRECTIONS[key];
            // Set the next move
            nextMovePos = position + dir.movement;
        }

        return { nextMovePos, direction: dir };
    }
}

export default Ghost;