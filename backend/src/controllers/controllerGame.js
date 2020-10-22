const gameModel = require('../models/modelGame');
const tools = require('../tools/tools');
const constants = require('./../constants/constants');



const getGames = (async (req, res) => {
    try {
        const games = await gameModel.find();
        const returnedGames = [];
        //formatting each game    
        games.map(game => returnedGames.push(game.cleanGame()));

        res.json({
            message: "Games found",
            data: returnedGames,
            error: ""
        });
    } catch (error) {
        console.log(error.message)
        res.json({
            message: "",
            data: {},
            error: error.message
        });
    }
});

const postGame = (async (req, res) => {
    try {
        const newGame = new gameModel()
        const dbGame = await newGame.save();
        res.json({
            message: "Game Created",
            data: dbGame.cleanGame(),
            error: ""
        });
    } catch (error) {
        console.log(error.message)
        console.log('************ error')
        res.json({
            message: "",
            data: {},
            error: error.message
        });
    }
});

const putGame = (async (req, res) => {

    const oldGame = await gameModel.findById(req.params.id);

    if (oldGame !== null) {
        if (!req.params.id || !req.body || !req.body.board) {
            res.json({ message: 'Missing board to update the game.' });
        } else if (oldGame.status !== 'started') {
            res.json({ Message: 'The game is over' });
        } else {
            console.log("CONTINUE")
            try {
                await gameModel.findOneAndUpdate(req.params.id, {
                    board: req.body.board,
                });
                const game = await gameModel.findById(req.params.id);
                res.json({
                    message: "Game Updated",
                    data: game.cleanGame(),
                    error: ""
                });
            } catch (error) {
                console.log('**************** error')
                console.log(error.message)
                res.json({
                    message: "",
                    data: {},
                    error: error.message
                });
            }
        }
    } else {
        res.json({
            message: "",
            data: {},
            error: "Game not Found"
        });
    }



    // // Check for win
    // if (tools.checkIfWin(req.body.board)) {
    //     console.log("WIN");
    //     await gameModel.findOneAndUpdate(req.params.id, {
    //         currentTurn,
    //         status: "finished",
    //         board: req.body.board,
    //         winner: currentTurn,
    //         result: "won"
    //     });
    //     const game = await gameModel.findById(req.params.id);
    //     res.json(game.cleanGame());
    // }
    //     // Check for draw
    //     else if (tools.checkIfDraw(req.body.board)) {
    //         console.log("DRAW");       
    //         oldGame.status = "finished";        
    //         oldGame.result = "draw";
    //     }
    //     // Continue the game
    // else {

    // }

});


const getGame = async (req, res) => {
    const game = await gameModel.findById(req.params.id);    
    if (game !== null) {
        res.json({
            message: "",
            data: game.cleanGame(),
            error: ""
        });
    } else {
        res.json({
            message: "",
            data: {},
            error: "Game not Found"
        });
    }
};

module.exports = { getGames, postGame, putGame, getGame };