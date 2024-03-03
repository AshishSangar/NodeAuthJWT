const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./User')

const SECRET_KEY = 'super-secret-key'

const app = express();

app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err))

app.post('/register', async (req, res) => {
    try {
        const { name, dob, email, password } = req.body
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, dob, email, password: hashPassword })
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "User Not Found" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Password Not Matching" })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.json({ token, user })
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(3001, () => {
    console.log("Server is Connected");
})
