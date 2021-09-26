const express = require('express')
require('dotenv').config()
const middleware = require('./middleware')
const notes = require('./data/notes')
const session = require('express-session');

const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
}))


app.use(express.json())
//home request
app.get('/', (req, res) => {
    res.send('API is running!')
})


//api to get all the users
const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

//login routes
const loginRoutes = require('./routes/loginRoutes')
app.use('/login', loginRoutes)

//api to get all the notes
app.get('/api/notes', (req, res) => {
    res.send(notes)
})


//finding a note that matches a particle id
app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((note) => {
        return note._id === req.params.id
    })

    res.send(note)
})

//listening to port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Project is all set Up!")
})