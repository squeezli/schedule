const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const auth = require('../middleware/auth')

// User

router.post('/user/create',
    [
        check('email', 'Введите корректный email').isEmail(),
        check('password', 'Введите пароль').isLength({ min: 6 })
    ],
    require('../controllers/userAuth').createUser)


router.post('/user/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    require('../controllers/userAuth').loginUser)


router.post('/user/create/groop',
    [
        check('login', 'Введите корректный login').isLength({min: 6}),
        check('nameGroop', 'Введите корректное имя').isLength({min: 2}),
        check('passwordGroop', 'Введите пароль').isLength({ min: 6 })
    ], auth,
    require('../controllers/userLogick').createGroop)

router.get('/user/groops',auth, require('../controllers/userLogick').listGroop)
router.get('/user/groop/:login',auth, require('../controllers/userLogick').cardGroop)

// Groop

router.post('/groop/login', require('../controllers/groopAuth').loginGroop)

// router.post('login', require('../controllers/user').loginUser)


module.exports = router