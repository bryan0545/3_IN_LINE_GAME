const constants = require('../constants/constants')
const tools = {};

tools.checkIfWin = function (currentTurn, board) {
    return constants.COMBINATION_TO_WIN.some(combination =>
        (board[combination[0]] !== '' &&
            board[combination[1]] !== '' &&
            board[combination[2]] !== '' &&
            board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]]
        )
    )
}

tools.checkIfDraw = function (board) {
    return board.every(cell => cell !== '');
}

module.exports = tools;