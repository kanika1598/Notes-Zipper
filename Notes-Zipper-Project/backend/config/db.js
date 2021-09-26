const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/NotesZipperDB', { useNewUrlParser: true, useUnifiedTopology: true })