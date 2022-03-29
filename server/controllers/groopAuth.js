const Groop = require('../models/Groop')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



exports.loginGroop = async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: ('Некорректные данные при входе в систему')
            })
        }

        const { login, password } = req.body

        const groop = await Groop.findOne({ login })

        if (!groop) {
            return res.status(400).json({ message: 'Неверный login и/или пароль' })
        }

        const isPassValid = await bcrypt.compareSync(password, groop.passwordGroop)

        if (!isPassValid) {
            return res.status(400).json({ message: 'Неверный login и/или пароль' })
        }

        const token = jwt.sign({ id: groop.id }, config.get('secretKey'), { expiresIn: '1h' })

        return res.json({
            token,
            groop: {
                groopId: groop.id,
                nameGroop: groop.nameGroop,
                week: groop.week
            }
        })

    } catch (error) {
        res.status(500).json({ message: 'что то пошло не так, попробуйте снова' })
    }
}