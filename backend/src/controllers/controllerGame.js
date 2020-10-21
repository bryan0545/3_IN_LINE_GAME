const gameModel = require('../models/modelGame');
const tools = require('../tools/tools');

const putController = async (id, body) => {
    const { currentTurn, board } = body;
    //Check for win
    if (tools.checkIfWin(body.currentTurn, body.board)) {
        console.log("WIN", tools.checkIfWin(body.currentTurn, body.board));
        await gameModel.findOneAndUpdate(id,
            {
                currentTurn,
                board,
                status: "finished",
                winner: currentTurn === "X" ? "O" : "X",
                result: "won"
            });
            return;
    }
    //Check for win
    if (tools.checkIfDraw(body.board)) {
        console.log("DRAW", tools.checkIfDraw(body.board))
        await gameModel.findOneAndUpdate(id,
            {
                currentTurn,
                board,
                status: "finished",
                winner: currentTurn === "X" ? "O" : "X",
                result: "draw"
            });
            return;
    }
    //If the game continue
    console.log("CONTINUE")
    await gameModel.findOneAndUpdate(id, body);
}

const getGames = (async (req, res) => {
    const games = await gameModel.find();
    const returnedGames = [];
    //formatting each game    
    games.map(game => returnedGames.push(game.cleanGame()));
    res.json(returnedGames);
});

const postGame = (async (req, res) => {
    if (!req.body || !req.body.currentTurn || !req.body.status || !req.body.board) {
        res.send({ message: 'Missing data to create the game.' });
    } else {
        const newGame = new gameModel(req.body)
        const dbGame = await newGame.save();
        res.send(dbGame)
    }
});

const putGame = (async (req, res) => {
    if (!req.params.id || !req.body || !req.body.currentTurn || !req.body.board) {
        res.send({ message: 'Missing data to update the game.' });
    } else if (req.body.status !== 'started') {
        res.send({ message: 'The game is over' });
    }
    else {
        putController(req.params.id, req.body);
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