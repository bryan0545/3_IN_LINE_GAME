const router = require('express').Router();
const {getGames, postGame, putGame, getGame} = require('../controllers/controllerGame')

router.route('/')
    .get(getGames)
    .post(postGame)    
    
router.route('/:id')
    .get(getGame)
    .put(putGame)

module.exports = router;