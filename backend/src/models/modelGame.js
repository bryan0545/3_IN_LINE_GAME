const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    currentTurn: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'started',
        required: true,
    },
    board: {
        type: [String],
        required: true,
    },
    winner: {
        type: String,
        required: false,
    },
    result: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

gameSchema.methods.cleanGame = function cleanGame() {
    let gameObj = this.toObject();     
    gameObj.id = gameObj._id;
    delete gameObj._id;
    delete gameObj.__v; 
    return gameObj;
};

module.exports = model('Game', gameSchema)