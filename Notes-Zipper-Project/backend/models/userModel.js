const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/NotesZipperDB', { useNewUrlParser: true, useUnifiedTopology: true })

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true,
        default: 'https://cdn.iconscout.com/icon/free/png-256/profile-417-1163876.png'
    }
}, { timestamps: true })

const User = new mongoose.model('User', UserSchema)

module.exports = User