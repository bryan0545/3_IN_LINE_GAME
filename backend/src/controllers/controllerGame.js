const gameModel = require('../models/modelGame');

const getGames = (async (req, res) => {
    const games = await gameModel.find();
    const returnedGames = [];
    //formatting each game    
    res.json(games);
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
    res.send({message: "Put game"});
});

const getGame = (async (req, res) => {
    const id = req.params.id;
    const game = await gameModel.findById(id);
    res.send(game);
});

module.exports = { getGames, postGame, putGame, getGame };