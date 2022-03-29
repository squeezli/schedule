const User = require('../models/User')
const Groop = require('../models/Groop')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')


exports.createUser = async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: ('Некорректные данные при регистрации')
            })
        }

        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: `Пользователь с данным email ${email} уже зарегистрирован` })
        }

        const hashPassword = await bcrypt.hash(password, 7)
        const user = new User({ email, password: hashPassword })

        await user.save()

        return res.status(201).json({ message: 'Пользователь создан' })

    } catch (error) {
        res.status(500).json({ message: 'что то пошло не так, попробуйте снова' })
    }

}


exports.loginUser = async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: ('Некорректные данные при входе в систему')
            })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: 'Неверный email и/или пароль' })
        }

        const isPassValid = await bcrypt.compare(password, user.password)



        if (!isPassValid) {
            return res.status(400).json({ message: 'Неверный email и/или пароль' })
        }

        const token = jwt.sign(
            { userID: user.id },
            config.get('secretKey'),
            { expiresIn: '1h' }
        )

        return res.json({
            token,
            user:  user.id,
                
        })

    } catch (error) {
        res.status(500).json({ message: 'что то пошло не так, попробуйте снова' })
    }
}


// exports.loginUser = function (req, res) {}
