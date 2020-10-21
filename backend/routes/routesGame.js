const router = require('express').Router();


router.route('/')
    .get((req,res)=> res.json({message:"get games"}))
    .post((req,res)=> res.json({message:"post games"}))   
    
router.route('/:id')
    .get((req,res)=> res.json({message:"get a game"}))
    .put((req,res)=> res.json({message:"put games"}))

module.exports = router;