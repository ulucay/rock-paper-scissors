// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveOneValue,
    playerOneMoveTwoType, playerOneMoveTwoValue,
    playerOneMoveThreeType, playerOneMoveThreeValue,
    playerTwoMoveOneType, playerTwoMoveOneValue,
    playerTwoMoveTwoType, playerTwoMoveTwoValue,
    playerTwoMoveThreeType, playerTwoMoveThreeValue;

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

const getRoundWinner = (roundNumber) => {
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
            break;
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
            break;
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
            break;
        default:
            return null;
    }
}

const getMoveWinner = (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) => {

    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    //If playerOne's move type is equal to playerTwo's move type then check player's move values
    if(playerOneMoveType === playerTwoMoveType){
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerTwoMoveValue > playerOneMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }

    if(playerOneMoveType === 'rock' && playerTwoMoveType === 'scissors'){
        return 'Player One';
    }else{
        return 'Player Two';
    }

    if(playerOneMoveType === 'paper' && playerTwoMoveType === 'rock'){
        return 'Player One';
    }else{
        return 'Player Two';
    }

    if(playerOneMoveType === 'scissors' && playerTwoMoveType === 'paper'){
        return 'Player One';
    }else{
        return 'Player Two';
    }
}


//Helper functions
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

const getGameWinner = () => {

}