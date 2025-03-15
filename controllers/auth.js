const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
    const { username, password, email } = req.body
    try {
        const user = await User.findOne(email)
        if (user) return res.status(500).json({ message: 'Mail kullanilmakta' })
        if (password.length < 6) res.status(500).json({ message: 'Parola 6 karakterden kisa olamaz' })
        const passwordHash = await bcrypt.hash(password, 12)
        if (!isEmail(email)) res.status(500).json({ message: 'Gecerli bir email giriniz' })
        const newUser = await User.create({ ...req.body, password: passwordHash })
        const token = jwt.sign({ id: newUser._id, idAdmin: newUser.isAdmin }, process.env.SECRET_TOKEN, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true }).status(201).json({
            token,
            newUser
        })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const login = async (req, res, next) => {
    const { password, email } = req.body
    try {
        const user = await User.findOne(email)
        if (!user) return res.status(500).json({ message: 'Kullanici zaten var' })
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) res.status(500).json({ message: 'Parola yanlis' })
        const token = jwt.sign({ id: user._id, idAdmin: user.isAdmin }, process.env.SECRET_TOKEN, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true }).status(200).json({
            token,
            user
        })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const isEmail = (emailAddress) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAddress.match(regex)) return true
    else return false
}

module.exports = { register, login }