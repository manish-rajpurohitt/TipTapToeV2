const router = require('express').Router();
let Feedback = require('../models/feedback.model');

router.route('/submitFeedback').post((req, res) => {
    const username = req.body.username;
    const feedback = req.body.feedback;
    const userFeedback = new Feedback({
        username, feedback
    });
    userFeedback.save()
        .then(() => res.json('Feedback submitted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;