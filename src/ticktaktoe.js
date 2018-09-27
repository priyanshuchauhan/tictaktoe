/**
 * 0 for CPU
 * 1 for Player One
 * 2 for Player One
 * initialGameState: size 3
 */
const gameState = {
    size: 3,

}

const tictaktoe = (input) => {
    if (input === 'N' ) {
        console.log('Game starts');
    }
};

const checkValidMove = () => {};

const updateGameState = () => {
    if (checkValidMove()) {

    }
};

/**
 * These functions are like factories except instead of creating
 * their own state they except external state so that it can
 * be shared among other functions
 * @param {Object} state 
 */
const player = (state) => ({
    play: (positionX, positionY) => {
        console.log('##play', state.name)
        console.log('##positionX', positionX)
    }
})

const cpu = (state) => ({
    play: (positionX, positionY) => {
        console.log('##cpu play', state.name)
    }
})

const playerOne = player({name: 'Priyanshu'});
const playerTwo = player({name: 'Vinay'});
const playerThree = cpu({name: 'Dumb AI'});

playerOne.play(2, 3);
playerTwo.play(1, 3);
playerThree.play(3, 3); 

// factories and composition
export default tictaktoe;   