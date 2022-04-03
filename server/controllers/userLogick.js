const Groop = require('../models/Groop')
const Week = require('../models/Week')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

exports.createGroop = async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: ('Некорректные данные при добавлении группы')
            })
        }
     
        const { login, nameGroop, passwordGroop } = req.body

        const candidate = await Groop.findOne({ nameGroop })
     
        if (candidate) {
            return res.status(400).json({ message: `Группа с таким именем ${nameGroop} уже зарегистрирован` })
        }

        
        const hashPassword = await bcrypt.hash(passwordGroop, 7)
        const groop = new Groop({ login, nameGroop, passwordGroop: hashPassword, user: req.user.userID })
      
        await groop.save()
        
       

        return res.status(201).json({groop, message: 'Группа добавлена'  })

       

    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}

exports.listGroop = async (req, res) => {
    try {
        
        const groops = await Groop.find({ user: req.user.userID })
        // console.log('groops', groops)
        res.json(groops)
      } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
      }

}
exports.cardGroop = async (req, res) => {
    try {
        console.log("req0", req.params)
        const groop = await Groop.findOne({login:req.params.login})
        const week = await Week.findOne({idGroops:groop._id})
        console.log('gr',week)
        res.json({groop,week})
    } catch (e) {
        
        res.status(500).json({ message: ' попробуйте снова' })
    }

}