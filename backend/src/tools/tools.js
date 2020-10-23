const constants = require('../constants/constants');
const tools = {};

tools.checkIfWin = function (board) {
    return constants.COMBINATION_TO_WIN.some(combination =>
        (board[combination[0]] !== '' &&
            board[combination[1]] !== '' &&
            board[combination[2]] !== '' &&
            board[combination[0]].toLowerCase() === board[combination[1]].toLowerCase() &&
            board[combination[1]].toLowerCase() === board[combination[2]].toLowerCase()
        )
    );
};

tools.checkIfDraw = function (board) {
    return board.every(cell => cell !== '');
};

tools.changeDateFormat = function (date) {   
    let stringDate = date.toString();
    stringDate.replace('T', ' ');
    return stringDate.substr(4,20);
};

tools.nextTurn = function (currentTurn) {   
    return currentTurn.toLowerCase() !== 'x' ? 'x' : 'o';
};


module.exports = tools;