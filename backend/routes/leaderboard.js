const router = require('express').Router();
let Leaderboard = require('../models/leaderboard.model');

router.route('/').get((req, res) => {
    Leaderboard.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/submitScore').post((req, res) => {
    const username = req.body.username;
    const highscore = Number(req.body.highscore);
    const newHighScore = new Leaderboard({
        username, highscore
    });
    newHighScore.save()
        .then(() => res.json('Leaderboard updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
