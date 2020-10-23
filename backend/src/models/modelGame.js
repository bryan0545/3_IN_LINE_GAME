const { Schema, model } = require('mongoose');
const tools = require('../tools/tools');

const gameSchema = new Schema({
    currentTurn: {
        type: String,
        default: 'x',
        required: false,
    },
    status: {
        type: String,
        default: 'started',
        required: false,
    },
    board: {
        type: [String],
        default: ['','','','','','','','',''],
        required: false,
    },
    winner: {
        type: String,
        default: '',
        required: false,
    },
    result: {
        type: String,
        default: '',
        required: false,
    }
}, {
    timestamps: true
});

gameSchema.methods.cleanGame = function cleanGame() {
    let gameObj = this.toObject();     
    gameObj.id = gameObj._id;
    gameObj.created = tools.changeDateFormat(gameObj.createdAt);
    gameObj.updated = tools.changeDateFormat(gameObj.updatedAt);

    delete gameObj._id;
    delete gameObj.__v; 
    delete gameObj.createdAt; 
    delete gameObj.updatedAt; 
    return gameObj;
};

module.exports = model('Game', gameSchema);