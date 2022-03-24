const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

/*
Проверка работы роутера, можно перенести в юнит тесты
router.get('/auth', (req, res) => {
    res.json({message:'Router Work!'})
}
)*/

module.exports = router