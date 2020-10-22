const gameModel = require('../models/modelGame');
const tools = require('../tools/tools');

const putController = async (id, newBoard) => {
    const game = await gameModel.findById(id);
    let { currentTurn, status, winner, result } = game;  
    const board = newBoard;
    
    // Check for win
    if (tools.checkIfWin(board)) {
        console.log("WIN");        
        status = "finished";
        winner = game.currentTurn;
        result = "won";
    }
    // Check for draw
    else if (tools.checkIfDraw(board)) {
        console.log("DRAW");       
        status = "finished";        
        result = "draw";
    }
    // Continue the game
    else {
        console.log("CONTINUE")
        currentTurn = tools.nextTurn(currentTurn);       
    }
     
     await gameModel.findOneAndUpdate(id, {
        currentTurn,
        board,
        status,
        winner,
        result
    })    
}

const getGames = (async (req, res) => {
    const games = await gameModel.find();
    const returnedGames = [];
    //formatting each game    
    games.map(game => returnedGames.push(game.cleanGame()));
    res.json(returnedGames);
});

const postGame = (async (req, res) => {
    const newGame = new gameModel()
    const dbGame = await newGame.save();
    res.send(dbGame.cleanGame())
});

const putGame = (async (req, res) => {
    if (!req.params.id || !req.body || !req.body.board) {
        res.send({ message: 'Missing board to update the game.' });
    } else {
        await putController(req.params.id, req.body.board);
        const game = await gameModel.findById(req.params.id);
       
        res.send(game.cleanGame());
    }
});

const getGame = (async (req, res) => {
    const id = req.params.id;
    const game = await gameModel.findById(id);
    res.send(game.cleanGame());
});

module.exports = { getGames, postGame, putGame, getGame };