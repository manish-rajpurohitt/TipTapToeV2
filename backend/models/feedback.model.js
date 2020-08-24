const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userFeedbackSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true, 
        minlength: 5
    }, 
    feedback: {
        type: String,
        required: false,
        default: ''
    }
}, {
    timestamps: true
});

const Feedback = mongoose.model('Feedback', userFeedbackSchema);

module.exports = Feedback;