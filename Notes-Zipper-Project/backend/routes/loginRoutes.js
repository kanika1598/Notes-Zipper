const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const router = express.Router()


//post request for users to login
router.post('/', async (req, res) => {
    const payload = req.body

    const email = req.body.email
    const password = req.body.password

    if (email && password) {
        const user = await User.findOne({ email: email })
        if (user !== null) {
            //check password and if password is correct login the user
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                req.session.user = user
                //res.redirect('/')
                res.send(user)
                console.log(user)
            }
            else {
                return res.status(400).send("Password is Incorrect!")
            }
        }
        else {

            return res.status(400).send("Kindly Register!")
        }
    }

    else {
        return res.status(400).send("Make sure every Input Filed has a value!")
    }
})


module.exports = router