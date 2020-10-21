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
    }
}, {
    timestamps: true
});

module.exports = model('Game', gameSchema)