// All code should be written in this file.
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (isValidType(moveOneType) && isValidType(moveTwoType) && isValidType(moveThreeType)
        && (isValidValue(moveOneValue) && isValidValue(moveTwoValue) && isValidValue(moveThreeValue))
        && (moveOneValue + moveTwoValue + moveThreeValue == 99)
    ) {
        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;

            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;

            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
}


const isValidType = moveType => {
    if (moveType === 'rock' || moveType === 'paper' || moveType === 'scissors') {
        return true;
    } else {
        return false;
    }
}

const isValidValue = moveValue => {
    if (moveValue >= 1 || moveValue <= 99) {
        return true;
    } else {
        return false;
    }
}
