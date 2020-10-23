const gameModel = require('../models/modelGame');
const tools = require('../tools/tools');

const getGames = (async (req, res) => {
    try {
        const games = await gameModel.find();
        const returnedGames = [];
        //formatting each game    
        games.map(game => returnedGames.push(game.cleanGame()));

        res.json({
            message: 'Games found',
            data: returnedGames,
            error: '',
        });
    } catch (error) {
        res.json({
            message: '',
            data: {},
            error: error.message,
        });
    }
    return;
});

const postGame = (async (req, res) => {
    try {
        const newGame = new gameModel();
        const dbGame = await newGame.save();
        res.json({
            message: 'Game Created',
            data: dbGame.cleanGame(),
            error: '',
        });
    } catch (error) {
        res.json({
            message: '',
            data: {},
            error: error.message,
        });
    }
    return;
});

const putGame = (async (req, res) => {
    if (!req.params.id || !req.body || !req.body.board) {
        res.json({
            message: '',
            data: {},
            error: 'Missing board to update the game.',
        });       
    } else if (req.body.status !== 'started') {        
        res.json({
            message: 'The game is over',
            data: {},
            error: '',
        }); 
    } else {
        const body = req.body;

        // Check for win
        if (tools.checkIfWin(body.board)) {
            body.status = 'finished';
            body.winner = body.currentTurn;
            body.result = 'won';
        }
        // Check for draw
        else if (tools.checkIfDraw(req.body.board)) {
            body.status = 'finished';
            body.result = 'draw';
        }
        // Continue the game
        else {
            body.currentTurn = tools.nextTurn(body.currentTurn);
        }
                    
        await gameModel.findByIdAndUpdate(req.params.id, body);
        const response = await gameModel.findById(req.params.id);
        if(response){
            res.json({
                message: 'Game Updated',
                data: response.cleanGame(),
                error: '',
            });
        }else{
            res.json({
                message: '',
                data: {},
                error: 'Game not Found',
            });
        }
    }
    return;
});

const getGame = async (req, res) => {
    const game = await gameModel.findById(req.params.id);
    if (game !== null) {
        res.json({
            message: 'Game found',
            data: game.cleanGame(),
            error: '',
        });
    } else {
        res.json({
            message: '',
            data: {},
            error: 'Game not Found',
        });
    }
    return;
};

module.exports = { getGames, postGame, putGame, getGame };