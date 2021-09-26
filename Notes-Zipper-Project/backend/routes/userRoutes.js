const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const router = express.Router()


//post request for users
router.post('/', async (req, res) => {
    const payload = req.body
    const name = req.body.name
    const email = req.body.email
    var password = req.body.password

    if (name && email && password) {
        const user = await User.findOne({ email: email })

        //if user already exists
        if (user !== null) {
            res.status(400).send("Email is already in use!")
        }

        //if user doesnt exist, register the user
        else {
            bcrypt.hash(password, 10).then((hash) => {
                const data = req.body;
                data.password = hash

                //saving data to database
                const newUser = new User(data)
                newUser.save(function (err) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.send(newUser)
                    }
                })
            })
        }
    }

    else {
        res.status(400).send("Make sure every data is valid!")
    }

})


//get the users
router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

module.exports = router